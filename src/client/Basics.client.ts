import { StarterGui } from "@rbxts/services";

let success = false;

while (success === false) {
	try {
		StarterGui.SetCoreGuiEnabled("All", false);
		StarterGui.SetCore("ResetButtonCallback", false);
		success = true;
	} catch {
		task.wait(0.5);
	}
}
