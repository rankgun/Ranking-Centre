import React from "@rbxts/react";

export function rankingPortal({ children }: { children: React.ReactNode }) {
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
				Size={UDim2.fromScale(1.00727, 0.76345)}
			>
				<uilistlayout
					key={"UIListLayout"}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0.02, 0)}
					SortOrder={Enum.SortOrder.LayoutOrder}
				/>
				{children}

				<uipadding key={"UIPadding"} PaddingTop={new UDim(0.01, 0)} />
			</scrollingframe>

			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={1.77902} />
		</frame>
	);
}
