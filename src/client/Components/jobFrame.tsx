import React from "@rbxts/react";
import { MarketplaceService, Players } from "@rbxts/services";
import { Remotes } from "@rbxts/remo";
import { CustomRank } from "shared/types";
import { remotes } from "shared/remotes";

function JobFrame({ header, body, rankId, gamepass }: CustomRank) {
	const productInfo = MarketplaceService.GetProductInfo(gamepass, Enum.InfoType.GamePass);

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundColor3={Color3.fromRGB(9, 9, 9)}
			BackgroundTransparency={0.5}
			key={"JobFrame"}
			Position={UDim2.fromScale(0.474888, 0.282762)}
			Size={UDim2.fromScale(0.966998, 0.109069)}
		>
			<uicorner key={"UICorner"} CornerRadius={new UDim(0.15, 0)} />

			<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)} Thickness={0.6} />

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Bold, Enum.FontStyle.Normal)}
				key={"JobName"}
				Position={UDim2.fromScale(0.215024, 0.297629)}
				Size={UDim2.fromScale(0.378806, 0.327241)}
				Text={header}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409")}
				key={"JobDescription"}
				Position={UDim2.fromScale(0.418, 0.655844)}
				Size={UDim2.fromScale(0.786, 0.397137)}
				Text={body}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(9, 9, 9)}
				BackgroundTransparency={0.5}
				key={"RedeemButtonFrame"}
				Position={UDim2.fromScale(0.910679, 0.326731)}
				Selectable={true}
				Size={UDim2.fromScale(0.139299, 0.251563)}
			>
				<uicorner key={"UICorner"} CornerRadius={new UDim(1, 0)} />

				<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)} Thickness={0.6} />

				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Medium, Enum.FontStyle.Normal)}
					key={"RedeemText"}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(0.584933, 0.684038)}
					Text={"REDEEM"}
					TextColor3={new Color3(1, 1, 1)}
					TextScaled={true}
				>
					<uitextsizeconstraint key={"UITextSizeConstraint"} />
				</textlabel>

				<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={4.355} AspectType={"FitWithinMaxSize"} DominantAxis={"Height"} />

				<textbutton
					key={"TextButton"}
					BackgroundTransparency={1}
					FontFace={new Font("rbxasset://fonts/families/SourceSansPro.json")}
					Size={UDim2.fromScale(1, 1)}
					Text={""}
					Event={{
						MouseButton1Click: () => remotes.redeem(rankId),
					}}
					TextColor3={new Color3()}
					TextSize={14}
					TextTransparency={1}
				/>
			</frame>

			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={7.86441} />

			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(9, 9, 9)}
				BackgroundTransparency={0.5}
				key={"PurchaseButtonFrame"}
				Position={UDim2.fromScale(0.910679, 0.689315)}
				Selectable={true}
				Size={UDim2.fromScale(0.139299, 0.97673)}
			>
				<uicorner key={"UICorner"} CornerRadius={new UDim(1, 0)} />

				<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)} Thickness={0.6} />

				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Medium, Enum.FontStyle.Normal)}
					key={"PriceText"}
					Position={UDim2.fromScale(0.61963, 0.499999)}
					Size={UDim2.fromScale(0.345674, 0.684038)}
					Text={tostring(productInfo.PriceInRobux ?? "0.00")}
					TextColor3={new Color3(1, 1, 1)}
					TextScaled={true}
					TextXAlignment={Enum.TextXAlignment.Left}
				>
					<uitextsizeconstraint key={"UITextSizeConstraint"} />
				</textlabel>

				<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={4.355} AspectType={"FitWithinMaxSize"} DominantAxis={"Height"} />


				<imagelabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Image={"rbxassetid://114937848683704"}
					key={"RobuxIcon"}
					Position={UDim2.fromScale(0.336509, 0.466798)}
					Size={UDim2.fromScale(0.111825, 0.541842)}
				>
					<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={0.898734} />
				</imagelabel>

				<textbutton
					BackgroundTransparency={1}
					FontFace={new Font("rbxasset://fonts/families/SourceSansPro.json")}
					key={"Button"}
					Event={{
						MouseButton1Click: () =>
							MarketplaceService.PromptGamePassPurchase(Players.LocalPlayer, gamepass),
					}}
					Size={UDim2.fromScale(1, 1)}
					Text={""}
					TextColor3={new Color3()}
					TextSize={14}
					TextTransparency={1}
				/>
			</frame>
		</frame>
	);
}

export { JobFrame };
