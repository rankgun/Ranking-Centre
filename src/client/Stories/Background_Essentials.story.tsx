import ReactRoblox from "@rbxts/react-roblox";
import React from "@rbxts/react";
import { InferFusionProps } from "@rbxts/ui-labs/";
import { Background } from "Client/Components/Background";

const controls = {
	jobId: "A",
};

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls,
	story: (props: InferFusionProps<typeof controls>) => {
		return <Background jobId={props.controls.jobId} />;
	},
};

export = story;
