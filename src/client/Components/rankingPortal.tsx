import React, { useState, useEffect } from "@rbxts/react";
import { remotes } from "shared/remotes";
import { CustomRank } from "shared/types";
import { JobFrame } from "./jobFrame";

export function RankingPortal() {
	const [jobs, setJobs] = useState<CustomRank[]>([]);

	useEffect(() => {
		remotes.getCentreData.request().then((rankCentre) => {
			if (rankCentre !== undefined) {
				setJobs(rankCentre.ranks);
			}
		});
	}, []);

	return (
		<scrollingframe
			Active={true}
			AutomaticCanvasSize={Enum.AutomaticSize.Y}
			BackgroundTransparency={1}
			BottomImage={"rbxassetid://112215092531711"}
			CanvasSize={new UDim2()}
			LayoutOrder={2}
			MidImage={"rbxassetid://72910408852056"}
			key={"Ranks"}
			Position={UDim2.fromScale(0, 0.188192)}
			ScrollBarImageColor3={Color3.fromRGB(40, 40, 40)}
			ScrollBarThickness={3}
			Size={UDim2.fromScale(1, 1)}
			TopImage={"rbxassetid://126598680156839"}
		>
			<uiflexitem key={"UIFlexItem"} FlexMode={Enum.UIFlexMode.Shrink} />

			<uipadding
				key={"UIPadding"}
				PaddingBottom={new UDim(0, 2)}
				PaddingLeft={new UDim(0, 2)}
				PaddingRight={new UDim(0, 15)}
				PaddingTop={new UDim(0, 2)}
			/>

			<uilistlayout key={"UIListLayout"} Padding={new UDim(0, 10)} SortOrder={Enum.SortOrder.LayoutOrder} />
			{jobs.map((item) => (
				<JobFrame
					id={item.id}
					header={item.header}
					body={item.body}
					rankId={item.rankId}
					gamepass={item.gamepass}
				/>
			))}
		</scrollingframe>
	);
}
