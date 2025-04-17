import ReactRoblox from "@rbxts/react-roblox";
import React from "@rbxts/react";
import { InferFusionProps } from "@rbxts/ui-labs/";
import { Background } from "client/Components/Background";
import { ResultsFrame,Success,Error } from "client/Components/resultsFrame";

const controls = {
	successFrameVisible: false,
	successFrameDescription: "You were promoted!",
	errorFrameVisible: true,
	errorFrameDescription: "Something went wrong!",
};

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls,
	story: (props: InferFusionProps<typeof controls>) => {
		return (
			<ResultsFrame>
				<Success
					visible={props.controls.successFrameVisible}
					description={props.controls.successFrameDescription}
				/>
				<Error visible={props.controls.errorFrameVisible} description={props.controls.errorFrameDescription} />
			</ResultsFrame>
		);
	},
};

export = story;
