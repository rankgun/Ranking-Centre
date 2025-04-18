import { Players } from "@rbxts/services";

import React, { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";

import { Background } from "./Components/Background";
import { RankingPortal } from "./Components/rankingPortal";
import { Success, Error } from "./Components/resultsFrame";

const playerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

const root = createRoot(new Instance("Folder"));

root.render(
	<StrictMode>
		{createPortal(
			<screengui IgnoreGuiInset={true}>
				<Background jobId={game.JobId}>
					<Success />
					<Error />
					<RankingPortal></RankingPortal>
				</Background>
			</screengui>,
			playerGui,
		)}
	</StrictMode>,
);
