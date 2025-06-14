import { Players } from "@rbxts/services";

import React, { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";

import { BackgroundAndCanvas } from "./Components/BackgroundAndCanvas";
import { RankingPortal } from "./Components/rankingPortal";
import { Success, Error } from "./Components/resultsFrame";

const playerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

const root = createRoot(new Instance("Folder"));

root.render(
	<StrictMode>
		{createPortal(
			<screengui IgnoreGuiInset={true} ZIndexBehavior={"Sibling"}>
				<BackgroundAndCanvas>
					<RankingPortal></RankingPortal>
				</BackgroundAndCanvas>
				<Success />
				<Error />
			</screengui>,
			playerGui,
		)}
	</StrictMode>,
);
