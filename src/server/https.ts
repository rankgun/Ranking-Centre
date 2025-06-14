import { HttpMethod, RankCentre, tRankCentre, CustomRank } from "shared/types";
import { HttpService, MarketplaceService } from "@rbxts/services";
import { rLog } from "@rbxts/rlog";
import { remotes } from "shared/remotes";
import BannerNotify from "@rbxts/banner-notify";

const logger = new rLog();
let rankcentre: RankCentre;

const URL = "https://api.rankgun.works";
const APIKEY = HttpService.GetSecret("API_KEY");
let workspaceId: string = "";

function httpRequest(endpoint: string, method: HttpMethod, body?: string): RequestAsyncResponse {
	return HttpService.RequestAsync({
		Url: `${URL}/${endpoint}`,
		Method: method,
		Body: body,
		Headers: { "staff-token": APIKEY as unknown as string, "Content-Type": "application/json" }, // Temporary solution until secret supported in headers type.
	});
}

function setId(id: string) {
	workspaceId = id;
}

function fetchCentreData(player: Player): RankCentre | undefined {
	try {
		const minRankReq = httpRequest(`rankingcentre/${workspaceId}/game`, HttpMethod.GET);
		const decodedBody = HttpService.JSONDecode(minRankReq.Body);

		if (minRankReq.StatusCode !== 200) {
			throw decodedBody;
		}

		assert(tRankCentre(decodedBody));

		rankcentre = decodedBody;

		return decodedBody;
	} catch (err) {
		logger.error("Failed to fetch rank centre.", { err });
		remotes.raiseError.fire(player, { description: "Failed to fetch rank centre.", visible: true });
	}
}

function redeem(player: Player, rank: number) {
	const foundRank: CustomRank | undefined = rankcentre.ranks.find((r) => r.rankId === rank);
	BannerNotify.Notify({
		duration: 2.5,
		header: "Processing.",
		icon: "",
		message: "Processing your request..",
		player,
	});

	if (foundRank === undefined) {
		remotes.raiseError.fire(player, { description: "Rank can't be found", visible: true });
		logger.error(`Rank ${rank} can't be found`, { ranks: rankcentre.ranks });
		return;
	}

	if (MarketplaceService.UserOwnsGamePassAsync(player.UserId, foundRank.gamepass) === false) {
		BannerNotify.Notify({
			duration: 5,
			header: "Gamepass not owned",
			icon: "rbxassetid://6034439649",
			message: "You do not own the gamepass needed to purchase this centre.",
			player,
		});
		return;
	}

	try {
		const minRankReq = httpRequest(
			`roblox/set-rank`,
			HttpMethod.POST,
			HttpService.JSONEncode({
				rank: rank,
				user_id: player.UserId,
				workspace_id: workspaceId,
			}),
		);
		const decodedBody = HttpService.JSONDecode(minRankReq.Body);

		if (minRankReq.StatusCode !== 200) {
			throw decodedBody;
		}

		remotes.raiseSuccess.fire(player, { description: "Successfully ranked!", visible: true });
	} catch (err) {
		logger.error("Failed to rank individual.", { err });
		remotes.raiseError.fire(player, { description: "Failed to rank individual.", visible: true });
	}
}

export { fetchCentreData, workspaceId, setId, redeem };
