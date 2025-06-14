import React from "@rbxts/react";
import { MarketplaceService, Players } from "@rbxts/services";
import { Remotes } from "@rbxts/remo";
import { CustomRank } from "shared/types";
import { remotes } from "shared/remotes";

function JobFrame({ header, body, rankId, gamepass }: CustomRank) {
	const productInfo = MarketplaceService.GetProductInfo(gamepass, Enum.InfoType.GamePass);

	return (
		<frame
			BackgroundColor3={Color3.fromRGB(14, 14, 14)}
			LayoutOrder={3}
			key={"Rank"}
			Position={UDim2.fromScale(-0.00211416, -0.00243309)}
			Size={new UDim2(1, 0, 0, 80)}
		>
			<uistroke key={"UIStroke"} Color={Color3.fromRGB(40, 40, 40)} />

			<uilistlayout
				key={"UIListLayout"}
				FillDirection={Enum.FillDirection.Horizontal}
				Padding={new UDim(0, 20)}
				SortOrder={Enum.SortOrder.LayoutOrder}
			/>

			<uipadding
				key={"UIPadding"}
				PaddingBottom={new UDim(0, 20)}
				PaddingLeft={new UDim(0, 20)}
				PaddingRight={new UDim(0, 20)}
				PaddingTop={new UDim(0, 20)}
			/>

			<uicorner key={"UICorner"} CornerRadius={new UDim(0, 20)} />

			<frame BackgroundTransparency={1} LayoutOrder={1} key={"Text"} Size={UDim2.fromScale(1, 1)}>
				<uiflexitem key={"UIFlexItem"} FlexMode={Enum.UIFlexMode.Shrink} />

				<textlabel
					AutomaticSize={Enum.AutomaticSize.XY}
					BackgroundTransparency={1}
					FontFace={
						new Font(
							"rbxasset://fonts/families/GothamSSm.json",
							Enum.FontWeight.Medium,
							Enum.FontStyle.Normal,
						)
					}
					LayoutOrder={2}
					key={"Body"}
					Text={body}
					TextColor3={Color3.fromRGB(100, 100, 100)}
					TextSize={16}
					TextTruncate={Enum.TextTruncate.AtEnd}
					TextWrapped={true}
					TextXAlignment={Enum.TextXAlignment.Left}
				/>

				<uilistlayout
					key={"UIListLayout"}
					Padding={new UDim(0, 2)}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>

				<textlabel
					AutomaticSize={Enum.AutomaticSize.XY}
					BackgroundTransparency={1}
					FontFace={
						new Font(
							"rbxasset://fonts/families/GothamSSm.json",
							Enum.FontWeight.Medium,
							Enum.FontStyle.Normal,
						)
					}
					LayoutOrder={1}
					key={"Header"}
					Text={header}
					TextColor3={Color3.fromRGB(200, 200, 200)}
					TextSize={20}
					TextTruncate={Enum.TextTruncate.AtEnd}
					TextWrapped={true}
					TextXAlignment={Enum.TextXAlignment.Left}
				/>
			</frame>

			<textbutton
				AnchorPoint={new Vector2(1, 0.5)}
				AutomaticSize={Enum.AutomaticSize.X}
				BackgroundColor3={Color3.fromRGB(51, 95, 255)}
				LayoutOrder={2}
				key={"Redeem"}
				TextTransparency={1}
				Event={{
					MouseButton1Click: () => remotes.redeem(rankId),
				}}
				Position={UDim2.fromScale(1, 0.5)}
				Size={UDim2.fromOffset(36, 36)}
			>
				<uicorner key={"UICorner"} CornerRadius={new UDim(1, 0)} />

				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					AutomaticSize={Enum.AutomaticSize.X}
					BackgroundTransparency={1}
					FontFace={
						new Font(
							"rbxasset://fonts/families/GothamSSm.json",
							Enum.FontWeight.Medium,
							Enum.FontStyle.Normal,
						)
					}
					LayoutOrder={2}
					key={"Redeem"}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromOffset(18, 18)}
					Text={"Redeem"}
					TextColor3={Color3.fromRGB(225, 225, 225)}
					TextSize={18}
				/>

				<uilistlayout
					key={"UIListLayout"}
					FillDirection={Enum.FillDirection.Horizontal}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>

				<uipadding
					key={"UIPadding"}
					PaddingLeft={new UDim(0, 14)}
					PaddingRight={new UDim(0, 14)}
					PaddingTop={new UDim(0, 1)}
				/>
			</textbutton>

			<textbutton
				AnchorPoint={new Vector2(1, 0.5)}
				AutomaticSize={Enum.AutomaticSize.X}
				BackgroundColor3={Color3.fromRGB(51, 95, 255)}
				LayoutOrder={2}
				TextTransparency={1}
				key={"Price"}
				Position={UDim2.fromScale(1, 0.5)}
				Size={UDim2.fromOffset(36, 36)}
				Event={{
					MouseButton1Click: () => MarketplaceService.PromptGamePassPurchase(Players.LocalPlayer, gamepass),
				}}
			>
				<uicorner key={"UICorner"} CornerRadius={new UDim(1, 0)} />

				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					AutomaticSize={Enum.AutomaticSize.X}
					BackgroundTransparency={1}
					FontFace={
						new Font(
							"rbxasset://fonts/families/GothamSSm.json",
							Enum.FontWeight.Medium,
							Enum.FontStyle.Normal,
						)
					}
					LayoutOrder={2}
					key={"Robux"}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromOffset(18, 18)}
					Text={` ${productInfo.PriceInRobux}`}
					TextColor3={Color3.fromRGB(225, 225, 225)}
					TextSize={18}
				/>

				<uilistlayout
					key={"UIListLayout"}
					FillDirection={Enum.FillDirection.Horizontal}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>

				<uipadding
					key={"UIPadding"}
					PaddingLeft={new UDim(0, 14)}
					PaddingRight={new UDim(0, 14)}
					PaddingTop={new UDim(0, 1)}
				/>
			</textbutton>
		</frame>
	);
}

export { JobFrame };
