import { t } from "@rbxts/t";

enum HttpMethod {
	GET = "GET",
	POST = "POST",
	DELETE = "DELETE",
	PATCH = "PATCH",
}

interface CustomRank {
	id: string;
	header: string;
	body: string;
	rankId: number;
	gamepass: number;
}

const tCustomRank = t.interface({
	id: t.string,
	header: t.string,
	body: t.string,
	rankId: t.number,
	gamepass: t.number,
});

interface StateMessage {
	description: string;
	visible: boolean;
}

const tStateMessage = t.interface({
	description: t.string,
	visible: t.boolean,
});

export interface RankCentre {
	id: string;
	lastRequest?: string;
	ranks: CustomRank[];
}

const tRankCentre = t.interface({
	id: t.string,
	lastRequest: t.optional(t.string),
	ranks: t.array(tCustomRank),
});

export { HttpMethod, tRankCentre, StateMessage, tStateMessage, CustomRank };
