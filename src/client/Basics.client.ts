import { StarterGui } from "@rbxts/services";

let success = false;

while (success === false) {
	try {
		StarterGui.SetCoreGuiEnabled("All", false);
		StarterGui.SetCore("ResetButtonCallback", false);
		success = true;
	} catch {
		wait(0.5);
	}
}
