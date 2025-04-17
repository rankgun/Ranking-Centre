import React, { ReactChildren } from "@rbxts/react";

interface StateMessage {
	description: string;
	visible: boolean;
}

function Success({ description, visible }: StateMessage) {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			key={"Success"}
			Position={UDim2.fromScale(0.5, 0.368299)}
			Size={UDim2.fromScale(1, 0.736598)}
			Visible={visible}
		>
			<uicorner key={"UICorner"} CornerRadius={new UDim(0.1, 0)} />

			<uistroke key={"UIStroke"} Color={Color3.fromRGB(39, 77, 33)} Thickness={2} />

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Bold, Enum.FontStyle.Normal)}
				key={"SuccessText"}
				Position={UDim2.fromScale(0.5015, 0.246131)}
				Size={UDim2.fromScale(0.378806, 0.197565)}
				Text={"Success"}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409")}
				key={"SuccessDescription"}
				Position={UDim2.fromScale(0.503311, 0.638491)}
				Size={UDim2.fromScale(0.748352, 0.316763)}
				Text={description}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<imagelabel
				AnchorPoint={new Vector2(0.5, 0)}
				BackgroundTransparency={1}
				Image={"rbxassetid://90105815352619"}
				key={"LineGradient"}
				Position={UDim2.fromScale(0.503275, 0.378792)}
				Size={UDim2.fromScale(0.700111, 0.0568915)}
			>
				<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={75.75} />
			</imagelabel>

			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={2.74169} />
		</frame>
	);
}

function Error({ description, visible }: StateMessage) {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			key={"Error"}
			Position={UDim2.fromScale(0.5, 0.368299)}
			Size={UDim2.fromScale(1, 0.736598)}
			Visible={visible}
		>
			<uicorner key={"UICorner"} CornerRadius={new UDim(0.1, 0)} />

			<uistroke key={"UIStroke"} Color={Color3.fromRGB(72, 8, 11)} Thickness={2} />

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Bold, Enum.FontStyle.Normal)}
				key={"ErrorText"}
				Position={UDim2.fromScale(0.5015, 0.246131)}
				Size={UDim2.fromScale(0.378806, 0.197565)}
				Text={"Error"}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409")}
				key={"ErrorDescription"}
				Position={UDim2.fromScale(0.503311, 0.638491)}
				Size={UDim2.fromScale(0.748352, 0.316763)}
				Text={description}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<imagelabel
				AnchorPoint={new Vector2(0.5, 0)}
				BackgroundTransparency={1}
				Image={"rbxassetid://90105815352619"}
				key={"LineGradient"}
				Position={UDim2.fromScale(0.503275, 0.378792)}
				Size={UDim2.fromScale(0.700111, 0.0568915)}
			>
				<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={75.75} />
			</imagelabel>

			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={2.74169} />
		</frame>
	);
}

function ResultsFrame({ children }: { children: React.ReactNode }) {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			key={"ResultsFrame"}
			Position={UDim2.fromScale(0.49933, 0.511085)}
			Size={UDim2.fromScale(0.287515, 0.253098)}
		>
			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={2.01952} />
			{children}
		</frame>
	);
}

export { Success, Error, ResultsFrame };
