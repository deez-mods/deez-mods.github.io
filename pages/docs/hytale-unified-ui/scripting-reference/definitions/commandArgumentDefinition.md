# CommandArgumentDefinition

## Definition

```java title="com.deezmods.unifiedui.api.definitions.CommandArgumentDefinition"
package com.deezmods.unifiedui.api.definitions;

public class CommandArgumentDefinition {
	public final String argName;
	public final String displayName;
	public final Boolean isRequired;
	public final CommandArgInputType inputType;
	public final String defaultValue;
	public final Map<String, String> defaultOptions;
}
```

## Summary

Defines how a dynamic argument should be displayed and function for a CommandDefinition. To avoid issues, `argName` should always be unique to the CommandDefinition. Both argName and displayName fields support i18n translation keys.

:::info[Example argName]
<u>_\<playerName>_</u> or <u>_filter=\<someFilter>_</u>
:::

## Builder

```Java
var argumentBuilder = new CommandArgumentDefinition.Builder("argName", "displayName");

public Builder(String argName, String displayName);

public Builder withArgName(String argName);

public Builder withDisplayName(String displayName);

public Builder withIsRequired(Boolean isRequired);

public Builder withCommandArgInputType(CommandArgInputType inputType);

public Builder withDefaultValue(String defaultValue);

public Builder withDefaultOptions(Map<String, String> defaultOptions);

public CommandArgumentDefinition build();

var argument = argumentBuilder.build();
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
      <td>argName</td>
      <td>Is used to match a wildcard in raw command, or passed back as an keyValue in a callback. See [CommandDefinition](/hytale-unified-ui/scripting-reference/definitions/commandDefinition#fields)[rawCommand and handleEvent].</td>
    </tr>
	<tr>
      <td>displayName</td>
      <td>Name of the argument to display near input. <strong>This supports i18n translation keys</strong>.</td>
    </tr>
	<tr>
      <td>isRequired</td>
      <td>If the field is required to run the command. If false and `rawCommand` is used, the wildcard substring will be removed from the command when value is not provided.</td>
    </tr>
	<tr>
      <td>inputType</td>
      <td>What input type should be rendered. Example [CommandArgInputType.Player](/hytale-unified-ui/scripting-reference/enums/commandArgInputType) which will show a player dropdown. Default is [CommandArgInputType.Text](/hytale-unified-ui/scripting-reference/enums/commandArgInputType) to show a text field.</td>
    </tr>
	<tr>
      <td>defaultValue</td>
      <td>Automatically populate an arg input with a default value.</td>
    </tr>
	<tr>
      <td>defaultOptions</td>
      <td>When using the [CommandArgInputType.Dropdown](/hytale-unified-ui/scripting-reference/enums/commandArgInputType) option, then the fields returned here will be displayed.</td>
    </tr>
  </tbody>
</table>
