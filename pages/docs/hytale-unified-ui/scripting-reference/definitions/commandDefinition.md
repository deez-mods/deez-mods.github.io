# CommandDefinition

## Definition

```java title="com.deezmods.unifiedui.api.definitions.CommandDefinition"
package com.deezmods.unifiedui.api.definitions;

public class CommandDefinition {
	public final String commandId;
	public final String displayName;
	public final String description;
	public final CommandSortingGroup sortingGroup;
	public final @Nullable String rawCommand;
	public final boolean closePageOnRun;
	public final List<String> worldFilter;
	public final List<GameMode> gameModeFilter;
	public final List<String> permissionFilters;
	public final List<CommandArgumentDefinition> commandArgs;
	public final @Nullable CommandHandleEventCallback handleEvent;
}
```

## Summary

Defines how a command should be displayed and function within Unified UI.

:::info
`CommandId` only needs to be unique to your own extension.
When being processed with UnifiedUI, your `manifest.json` will use Group and Name fields to prefix the ID.
:::

## Builder

```Java
var commandBuilder = new CommandDefinition.Builder("commandId", "commandName", "commandDescription");

public Builder(String commandId, String displayName, String description);

public Builder withCommandId(String commandId);

public Builder withClosePageOnRun(Boolean closePageOnRun);

public Builder withSortingGroup(CommandSortingGroup sortingGroup);

public Builder withWorldFilters(List<String> worldFilters);

public Builder withGameModeFilters(List<GameMode> gameModeFilters);

public Builder withPermissionFilters(List<String> permissionFilters);

public Builder withCommandArgs(List<CommandArgumentDefinition> commandArgs);

public Builder withRawCommand(String rawCommand);

public Builder withEventCallback(CommandHandleEventCallback handleEvent);

public CommandDefinition build();

var command = commandBuilder.build();
```

## Fields

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>commandId</td>
      <td>Is a unique id scoped to your module. Repeats can cause unexpected results in rendering and execution</td>
    </tr>
    <tr>
      <td>displayName</td>
      <td>Name of the command. <strong>This supports i18n translation keys</strong></td>
    </tr>
    <tr>
      <td>description</td>
      <td>Short description of the command. <strong>This supports i18n translation keys</strong></td>
    </tr>
    <tr>
      <td>sortingGroup</td>
      <td>The sorting group for the command, used when rendering the command list. See [CommandSortingGroup](/hytale-unified-ui/scripting-reference/enums/commandSortingGroup).</td>
    </tr>
	<tr>
      <td>rawCommand</td>
      <td>The command as you would enter into the console. This supports wild-cards similarly displayed in the /help page.</td>
    </tr>
	<tr>
      <td>worldFilter</td>
      <td>Only show the command in the Unified UI when world identified.</td>
    </tr>
	<tr>
      <td>gameModeFilter</td>
      <td>Only show the command in the Unified UI when in the expected game mode.</td>
    </tr>
	<tr>
      <td>permissionFilters</td>
      <td>Only show the command in the Unified UI when a player has the expected permission.</td>
    </tr>
	<tr>
      <td>commandArgs</td>
      <td>Defines rendering properties to match onto `rawCommand` wild-cards. See [CommandArgumentDefinition](/hytale-unified-ui/scripting-reference/definitions/commandArgumentDefinition).</td>
    </tr>
	<tr>
      <td>handleEvent()</td>
      <td>Defines the callback used instead of using the `rawCommand` property. See [CommandHandleEventCallback](/hytale-unified-ui/scripting-reference/callbacks/commandHandleEventCallback)</td>
    </tr>
  </tbody>
</table>
