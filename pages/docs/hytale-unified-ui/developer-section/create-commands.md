---
sidebar_position: 3.0
---

# Create Commands

## Summary

Below are a handful of examples to get started with making custom commands. For additional resources, review the following for type information and possible `builder.with` arguments

- [Command Definition](/hytale-unified-ui/scripting-reference/definitions/commandDefinition)
- [Command Argument Definition](/hytale-unified-ui/scripting-reference/definitions/commandArgumentDefinition)

## Hello World - Raw Command

This example demonstrates how you can define a command as a string value. It will be sent directly to the console as is.

This will always use the `playerRef` for the `commandSender` when processing in the background.

```java
// Initialize with Builder
var commandBuilder = new CommandDefinition.Builder(
	"hello.world", 		// Command Id
	"Hello World", 		// Command Display Name
	"Say Hello World!" 	// Command Description
);
// Define as raw command that will be sent to console.
commandBuilder.withRawCommand("/say Hello World");
// Build and return command.
var command = commandBuilder.build();
```

## Hello World - Callback Command

This example demonstrates how you can define a command as a callback function, and leverage the `playerRef` to do some creative things.

```Java
public CompletableFuture<List<CommandDefinition>> getCommands(PlayerRef playerRef) {
	// Initialize with Builder
	var commandBuilder = new CommandDefinition.Builder(
		"hello.world",		// Command ID
		"Hello World",		// Command Display Name
		"Say Hello World!"	// Command Description
	);
	// Define as dynamic command that will be processed at runtime.
	commandBuilder.withEventCallback((Map<String, String> _) -> CompletableFuture.supplyAsync(() -> {
		playerRef.sendMessage(
			Message.raw("Hello World")
		);
		return null;
	}));
	// Build and return command.
	var command = commandBuilder.build();
	return CompletableFuture.completedFuture(List.of(command));
}
```

## Input Argument - Raw Command

This example demonstrates how you can define an input arg that will be shown in the UI.

When the command is being processed, the wildcard name in the raw command will be replaced with the value returned from the argument input element.

```java
// Initialize with Builder
var commandBuilder = new CommandDefinition.Builder(
	"say",					// Command ID
	"Say Something",		// Command Display Name
	"Send message to chat"	// Command Description
);
// Define as raw command that will be sent to console.
commandBuilder.withRawCommand("/say <message>");
// Define an input argument for the player to fill.
{
	var messageArg = new CommandArgumentDefinition.Builder(
		"<message>",	// Argument Name
		"Message"		// Argument Display Name
	);
	messageArg.withIsRequired(true);
	messageArg.withCommandArgInputType(CommandArgInputType.Text);
	commandBuilder.withCommandArgs(List.of(messageArg.build()));
}
// Build and return command.
var command = commandBuilder.build();
return CompletableFuture.completedFuture(List.of(command));
```

## Input Argument - Callback Command

This example demonstrates how you can define an input arg that will be shown in the UI.

When the command is being processed as a callback, input arguments are returned int he callback function. You can then match on it by Argument Name.

```java
// Initialize with Builder
var commandBuilder = new CommandDefinition.Builder(
	"say",					// Command ID
	"Say Something",		// Command Display Name
	"Send message to chat"	// Command Description
);
// Define as dynamic command that will be processed at runtime.
commandBuilder.withEventCallback((Map<String, String> args) -> CompletableFuture.supplyAsync(() -> {
	var message = args.getOrDefault("arg-message", "");
	CommandManager.get().handleCommand(playerRef, "say %s".formatted(message));
	return null;
}));
// Define an input argument for the player to fill.
{
	var messageArg = new CommandArgumentDefinition.Builder(
		"arg-message",	// Argument Name
		"Message"		// Argument Display Name
	);
	messageArg.withIsRequired(true);
	messageArg.withCommandArgInputType(CommandArgInputType.Text);
	commandBuilder.withCommandArgs(List.of(messageArg.build()));
}
// Build and return command.
var command = commandBuilder.build();
return CompletableFuture.completedFuture(List.of(command));
```
