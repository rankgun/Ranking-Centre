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
			BackgroundColor3={Color3.fromRGB(12, 12, 12)}
			BorderColor3={new Color3()}
			BorderSizePixel={0}
			Visible={successState.visible}
			key={"ResultsFrame"}
			Size={UDim2.fromScale(1, 1)}
			ZIndex={2}
		>
			<frame BackgroundTransparency={1} key={"Canvas"} Size={UDim2.fromScale(1, 1)}>
				<uilistlayout
					key={"UIListLayout"}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0, 15)}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>

				<frame
					BackgroundColor3={Color3.fromRGB(12, 12, 12)}
					BorderColor3={new Color3()}
					BorderSizePixel={0}
					key={"Success"}
					Size={UDim2.fromScale(0.75, 0.75)}
					ZIndex={2}
				>
					<uilistlayout
						key={"UIListLayout"}
						HorizontalAlignment={Enum.HorizontalAlignment.Center}
						Padding={new UDim(0, 10)}
						SortOrder={Enum.SortOrder.LayoutOrder}
						VerticalAlignment={Enum.VerticalAlignment.Center}
					/>

					<imagelabel
						BackgroundTransparency={1}
						Image={"rbxassetid://71018809253376"}
						ImageColor3={Color3.fromRGB(87, 212, 87)}
						key={"Icon"}
						Size={UDim2.fromOffset(128, 128)}
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
						key={"Title"}
						Text={"Success!"}
						TextColor3={Color3.fromRGB(87, 212, 87)}
						TextSize={40}
						TextWrapped={true}
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
						key={"Caption"}
						Text={successState.description}
						TextColor3={Color3.fromRGB(40, 40, 40)}
						TextSize={18}
						TextWrapped={true}
					/>
				</frame>
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
			BackgroundColor3={Color3.fromRGB(12, 12, 12)}
			BorderColor3={new Color3()}
			BorderSizePixel={0}
			key={"ResultsFrame"}
			Visible={errorState.visible}
			Size={UDim2.fromScale(1, 1)}
			ZIndex={2}
		>
			<frame BackgroundTransparency={1} key={"Canvas"} Size={UDim2.fromScale(1, 1)}>
				<uilistlayout
					key={"UIListLayout"}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0, 15)}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>

				<frame
					BackgroundColor3={Color3.fromRGB(12, 12, 12)}
					BorderColor3={new Color3()}
					BorderSizePixel={0}
					key={"Error"}
					Size={UDim2.fromScale(0.75, 0.75)}
					ZIndex={2}
				>
					<uilistlayout
						key={"UIListLayout"}
						HorizontalAlignment={Enum.HorizontalAlignment.Center}
						Padding={new UDim(0, 10)}
						SortOrder={Enum.SortOrder.LayoutOrder}
						VerticalAlignment={Enum.VerticalAlignment.Center}
					/>

					<imagelabel
						BackgroundTransparency={1}
						Image={"rbxassetid://77746565233899"}
						ImageColor3={Color3.fromRGB(234, 59, 82)}
						key={"Icon"}
						Size={UDim2.fromOffset(128, 128)}
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
						key={"Title"}
						Text={"Something went wrong!"}
						TextColor3={Color3.fromRGB(234, 59, 82)}
						TextSize={40}
						TextWrapped={true}
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
						key={"Caption"}
						Text={errorState.description}
						TextColor3={Color3.fromRGB(40, 40, 40)}
						TextSize={18}
						TextWrapped={true}
					/>
				</frame>
			</frame>
		</frame>
	);
}

export { Success, Error, StateMessage };
