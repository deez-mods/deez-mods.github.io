# CommandDefinition

## Class

```java title="com.deezmods.unifiedui.api.definitions.CommandDefinition"
package com.deezmods.unifiedui.api.definitions;

public class FeatureDefinition {
	public final String commandId;
	public final String displayName;
	public final String description;
	public final CommandSortingGroup sortingGroup;
	public final String rawCommand;
	public final boolean closePageOnRun;
	public final List<String> worldFilter;
	public final List<GameMode> gameModeFilter;
	public final List<String> permissionFilters;
	public final List<CommandArgumentDefinition> commandArgs;
}
```

## Summary

Defines how a command should be displayed and function within Unified UI.

:::info

Module will be automatically determined and does not need to be included in commandId field.

Example: [commandId = "helloWorld" -> "com.example.plugin.helloWorld"]

This will only determine up to three modules deep -> "com.example.plugin"

:::

## Fields

### commandId:String

Is a unique id scoped to your module. Repeats can cause unexpected results in rendering and execution

### displayName:String

Name of the command. <strong>This supports i18n translation keys</strong>

### description:String

Short description of the command. <strong>This supports i18n translation keys</strong>.

### sortingGroup:<u>[CommandSortingGroup](/hytale-unified-ui/scripting-reference/enums/commandSortingGroup)</u>

The sorting group for the command, use when rendering the command list.

### rawCommand:String

The command as you would enter into the console. This supports wild-cards similarly seen in the /help page

### worldFilter:List\<String>

Only show the command in the Unified UI when world identified.

### gameModeFilter:List\<GameMode>

Only show the command in the Unified UI when in the expected game mode.

### permissionFilters:List\<String>

Only show the command in the Unified UI when a player has the expected permission.

### commandArgs:List\<<u>[CommandArgumentDefinition](/hytale-unified-ui/scripting-reference/definitions/commandArgumentDefinition)</u>>

Defines rendering properties to match onto rawCommand wild-cards.
