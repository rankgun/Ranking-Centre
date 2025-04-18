import { Client, Server, createRemotes, loggerMiddleware, remote } from "@rbxts/remo";
import { t } from "@rbxts/t";
import { RankCentre, tRankCentre, StateMessage, tStateMessage } from "./types";

export const remotes = createRemotes(
	{
		getCentreData: remote<Server>().returns<RankCentre | undefined>(tRankCentre),
		raiseError: remote<Client, [StateMessage]>(tStateMessage),
		raiseSuccess: remote<Client, [StateMessage]>(tStateMessage),
		redeem: remote<Server, [rank: number]>(t.number),
	},
	loggerMiddleware,
);
