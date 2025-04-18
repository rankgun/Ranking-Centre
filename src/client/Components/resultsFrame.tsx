import React from "@rbxts/react";
import { StateMessage } from "shared/types";
import { useState } from "@rbxts/react";
import { remotes } from "shared/remotes";

function Success() {
	const [successState, setSuccessState] = useState<StateMessage>({ description: "", visible: false });

	remotes.raiseSuccess.connect((stateMessage) => {
		setSuccessState(stateMessage);
	});

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundColor3={Color3.fromRGB(20, 20, 20)}
			BorderColor3={new Color3()}
			ZIndex={2}
			Visible={successState.visible}
			BorderSizePixel={0}
			key={"ResultsFrame"}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(1, 1)}
		>
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				key={"Success"}
				ZIndex={2}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(0.588, 0.222235)}
				Visible={successState.visible}
			>
				<uicorner key={"UICorner"} CornerRadius={new UDim(0.1, 0)} />

				<uistroke key={"UIStroke"} Color={Color3.fromRGB(39, 77, 33)} Thickness={2} />

				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					ZIndex={2}
					FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Bold, Enum.FontStyle.Normal)}
					key={"SuccessText"}
					Position={UDim2.fromScale(0.5015, 0.246131)}
					Size={UDim2.fromScale(0.378806, 0.197565)}
					Text={"Success!"}
					TextColor3={new Color3(1, 1, 1)}
					TextScaled={true}
				>
					<uitextsizeconstraint key={"UITextSizeConstraint"} />
				</textlabel>

				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					ZIndex={2}
					FontFace={new Font("rbxassetid://11702779409")}
					key={"SuccessDescription"}
					Position={UDim2.fromScale(0.503311, 0.638491)}
					Size={UDim2.fromScale(0.748352, 0.316763)}
					Text={successState.description}
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
					ZIndex={2}
					Position={UDim2.fromScale(0.503275, 0.378792)}
					Size={UDim2.fromScale(0.700111, 0.0253398)}
				>
					<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={75.75} />
				</imagelabel>

				<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={2.74169} />
			</frame>
		</frame>
	);
}

function Error() {
	const [errorState, setErrorState] = useState<StateMessage>({ description: "", visible: false });

	remotes.raiseError.connect((stateMessage) => {
		setErrorState(stateMessage);
	});

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundColor3={Color3.fromRGB(20, 20, 20)}
			BorderColor3={new Color3()}
			Visible={errorState.visible}
			ZIndex={2}
			BorderSizePixel={0}
			key={"ResultsFrame"}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(1, 1)}
		>
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				key={"Error"}
				ZIndex={2}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(0.588015, 0.22224)}
				Visible={errorState.visible}
			>
				<uicorner key={"UICorner"} CornerRadius={new UDim(0.1, 0)} />

				<uistroke key={"UIStroke"} Color={Color3.fromRGB(72, 8, 11)} Thickness={2} />

				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					ZIndex={2}
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
					ZIndex={2}
					Position={UDim2.fromScale(0.503311, 0.638491)}
					Size={UDim2.fromScale(0.748352, 0.316763)}
					Text={errorState.description}
					TextColor3={new Color3(1, 1, 1)}
					TextScaled={true}
				>
					<uitextsizeconstraint key={"UITextSizeConstraint"} />
				</textlabel>

				<imagelabel
					AnchorPoint={new Vector2(0.5, 0)}
					BackgroundTransparency={1}
					ZIndex={2}
					Image={"rbxassetid://90105815352619"}
					key={"LineGradient"}
					Position={UDim2.fromScale(0.503275, 0.378792)}
					Size={UDim2.fromScale(0.700111, 0.0253398)}
				>
					<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={75.75} />
				</imagelabel>

				<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={2.74169} />
			</frame>
		</frame>
	);
}

export { Success, Error, StateMessage };
