_G.NOCOLOR = true

local ServerScriptService = game:GetService("ServerScriptService")
local StarterPlayer = game:GetService("StarterPlayer")

local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local TestRunner = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "runit", "out").TestRunner
local ServerScriptService = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").ServerScriptService
print("==== CLIENT TESTS ====")
local clientTests = TestRunner.new(StarterPlayer.StarterPlayerScripts.TS.Tests):run()
print("==== SERVER TESTS ====")
local serverTests = TestRunner.new(ServerScriptService.TS.Tests):run()
