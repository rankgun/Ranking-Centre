import ReactRoblox from "@rbxts/react-roblox";
import React from "@rbxts/react";
import { BackgroundAndCanvas } from "client/Components/BackgroundAndCanvas";

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	story: () => {
		return <BackgroundAndCanvas />;
	},
};

export = story;
