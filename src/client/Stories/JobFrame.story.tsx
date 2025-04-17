import ReactRoblox from "@rbxts/react-roblox";
import React from "@rbxts/react";
import { InferFusionProps } from "@rbxts/ui-labs/";
import { JobFrame } from "client/Components/jobFrame";

const controls = {
	header: "Head Chef",
	body: "Cease control of the chef and rule the kitchen.",
};

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls,
	story: (props: InferFusionProps<typeof controls>) => {
		return (
			<JobFrame
				id={"525f"}
				header={props.controls.header}
				body={props.controls.body}
				rank={255}
				gamepass={2525}
			/>
		);
	},
};

export = story;
