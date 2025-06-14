import React from "@rbxts/react";

function BackgroundAndCanvas({ children }: React.PropsWithChildren) {
	return (
		<frame
			BackgroundColor3={Color3.fromRGB(12, 12, 12)}
			BorderColor3={new Color3()}
			BorderSizePixel={0}
			Size={UDim2.fromScale(1, 1)}
			ZIndex={0}
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
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					key={"Container"}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(0.75, 0.75)}
				>
					<frame
						AutomaticSize={Enum.AutomaticSize.Y}
						BackgroundTransparency={1}
						LayoutOrder={1}
						key={"Header"}
						Size={UDim2.fromScale(1, 0)}
					>
						<textlabel
							AutomaticSize={Enum.AutomaticSize.Y}
							BackgroundTransparency={1}
							FontFace={
								new Font(
									"rbxasset://fonts/families/GothamSSm.json",
									Enum.FontWeight.Medium,
									Enum.FontStyle.Normal,
								)
							}
							LayoutOrder={2}
							key={"Title"}
							Position={UDim2.fromScale(0.00703871, 0.354839)}
							Size={UDim2.fromScale(1, 0)}
							Text={"Ranking Center"}
							TextColor3={Color3.fromRGB(225, 225, 225)}
							TextSize={40}
							TextWrapped={true}
							TextXAlignment={Enum.TextXAlignment.Left}
						/>

						<uilistlayout
							key={"UIListLayout"}
							Padding={new UDim(0, 6)}
							SortOrder={Enum.SortOrder.LayoutOrder}
						/>

						<uipadding key={"UIPadding"} PaddingRight={new UDim(0, 15)} />
					</frame>
					{children}
				</frame>
			</frame>
		</frame>
	);
}

export { BackgroundAndCanvas };
