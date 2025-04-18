import React from "@rbxts/react";

interface BackgroundProps extends React.PropsWithChildren {
	jobId: string;
}

function Background({ jobId, children }: BackgroundProps) {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			key={"RankGunUI"}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(1, 1)}
		>
			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxasset://fonts/families/RobotoMono.json")}
				key={"ServerText"}
				Position={UDim2.fromScale(0.817494, 0.0794543)}
				Size={UDim2.fromScale(0.259283, 0.0283103)}
				Text={`Server: ${jobId}`}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Right}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxasset://fonts/families/Roboto.json")}
				key={"HelpText"}
				Position={UDim2.fromScale(0.499786, 0.93904)}
				Size={UDim2.fromScale(0.259283, 0.0353177)}
				Text={"Need help? Join our community support server."}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={"rbxassetid://100530871940279"}
				key={"BackgroundGraphics"}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(1, 1)}
				ZIndex={0}
			/>
			{children}
		</frame>
	);
}

export { Background };
