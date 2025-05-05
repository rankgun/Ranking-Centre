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
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			key={"RankingPortal"}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(0.478588, 0.610203)}
		>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0)}
				BackgroundTransparency={1}
				Image={"rbxassetid://90105815352619"}
				key={"LineGradient"}
				Position={UDim2.fromScale(0.483349, 0.0857637)}
				Size={UDim2.fromScale(0.700111, 0.0568915)}
			>
				<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={75.75} />
			</imagelabel>

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Bold, Enum.FontStyle.Normal)}
				key={"RankingPortalText"}
				Position={UDim2.fromScale(0.482667, 0.0459546)}
				Size={UDim2.fromScale(0.378806, 0.0758067)}
				Text={"Ranking Portal"}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<scrollingframe
				Active={true}
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				key={"ListScrollingFrame"}
				Position={UDim2.fromScale(0.474563, 0.488731)}
				ScrollBarThickness={2}
				Size={UDim2.fromScale(1.8, 0.76345)}
			>
				<uilistlayout
					key={"UIListLayout"}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0.02, 0)}
					SortOrder={Enum.SortOrder.LayoutOrder}
				/>
				{jobs.map((item) => (
					<JobFrame
						id={item.id}
						header={item.header}
						body={item.body}
						rankId={item.rankId}
						gamepass={item.gamepass}
					/>
				))}

				<uipadding key={"UIPadding"} PaddingTop={new UDim(0.01, 0)} />
			</scrollingframe>

			<uiaspectratioconstraint
				key={"UIAspectRatioConstraint"}
				AspectRatio={0.98}
				AspectType={"ScaleWithParentSize"}
				DominantAxis={"Width"}
			/>
		</frame>
	);
}
