import ReactRoblox from "@rbxts/react-roblox";
import React from "@rbxts/react";
import { Success, Error } from "client/Components/resultsFrame";

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	story: () => {
		return (
			<frame>
				<Success />
				<Error />
			</frame>
		);
	},
};

export = story;
