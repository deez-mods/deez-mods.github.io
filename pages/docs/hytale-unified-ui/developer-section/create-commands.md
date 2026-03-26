---
sidebar_position: 3.0
---

# Create Commands

## Simple Command

Here is an example of adding in a simple command, helpful if you just want to wrap some console commands into the **Unified UI**.

```java
public class HelpCommand {
	public static CommandDefinition create(PlayerRef _) {
		return new CommandDefinition.Builder(
			"help",
			"Help",
			"Show the Help UI.",
			"/help"
		)
			.withSortingGroup(CommandSortingGroup.UTILITY)
			.build();
	}
}

public class ExampleExtension implements UuiExtension {
	@Override
	public CompletableFuture<List<CommandDefinition>> getCommands(PlayerRef playerRef) {
		List<CommandDefinition> commandDefinitions = new ArrayList<>();
		commandDefinitions.add(HelpCommand.create(playerRef));
		return CompletableFuture.completedFuture(commandDefinitions);
	}

	@Override
	public CompletableFuture<List<FeatureDefinition>> getFeatures(PlayerRef playerRef)...

	@Override
	public CompletableFuture<Void> onPageClose()...
}
```

With the `PlayerRef` command provided, you can take simple
