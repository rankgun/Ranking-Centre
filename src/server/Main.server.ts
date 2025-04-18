import { Players, RunService, HttpService } from "@rbxts/services";
import { t } from "@rbxts/t";
import { rLog } from "@rbxts/rlog";
import { remotes } from "shared/remotes";
import { fetchCentreData, setId, redeem } from "./https";

const logger = new rLog();

let workspaceId: string;

Players.PlayerAdded.Connect(function (player: Player) {
	const proposedId = player.GetJoinData().TeleportData;

	if (RunService.IsStudio()) {
		logger.info("Running In Dev Mode");
		workspaceId = "68kkUB5pGqw65yy"; // Change this.
		setId(workspaceId);
		return;
	}

	if (t.string(proposedId) === false) {
		logger.error("Malformed data received from teleport data.", { TeleportData: proposedId });
		player.Kick("Please join through an active hub.");
		return;
	}

	workspaceId = proposedId;
	setId(workspaceId);
});

remotes.getCentreData.onRequest(fetchCentreData);
remotes.redeem.connect(redeem);
