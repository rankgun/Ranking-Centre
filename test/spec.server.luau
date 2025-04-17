_G.NOCOLOR = true

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local ServerScriptService = game:GetService("ServerScriptService")
local StarterPlayer = game:GetService("StarterPlayer")

local Jest = require(ReplicatedStorage.rbxts_include.node_modules["@rbxts"].jest.src)

local status, result = Jest.runCLI(script, {
	verbose = true,
	ci = false,
	setupFiles = { script.Parent.setup },
}, {
	ReplicatedStorage.TS.Tests,
	StarterPlayer.StarterPlayerScripts.TS.Tests,
	ServerScriptService.TS.Tests,
}):awaitStatus()

if status == "Rejected" then
	print(result)
	error("Tests failed")
end