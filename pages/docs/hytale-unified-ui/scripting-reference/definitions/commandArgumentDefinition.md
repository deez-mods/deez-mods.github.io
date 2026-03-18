# CommandArgumentDefinition

## Class

```java title="com.deezmods.unifiedui.api.definitions.CommandArgumentDefinition"
package com.deezmods.unifiedui.api.definitions;

public class CommandArgumentDefinition {
	String argName,
	String displayName,
	Boolean isRequired,
	CommandArgInputType inputType,
	String defaultValue
}
```

## Summary

Defines how a dynamic argument should be displayed and function for a CommandDefinition.

## Fields

### argName:String

Is used to match a [CommandDefinition.rawCommand](/hytale-unified-ui/scripting-reference/definitions/commandDefinition#rawcommand) wild-card.

:::info[Example]

argName = "\<playerName>" or "filter=\<someFilter>"

:::

### displayName:String

Name of the argument to display near input. <strong>This supports i18n translation keys</strong>.

### isRequired:Boolean

If the field is required to run the command. If false, the wildcard substring will be removed from the command when value is not provided.

### inputType:<u>[CommandArgInputType](/hytale-unified-ui/scripting-reference/enums/commandArgInputType)</u>

What input type should be rendered. Example [CommandArgInputType.Player](/hytale-unified-ui/scripting-reference/enums/commandArgInputType) which will show a player dropdown. Default is [CommandArgInputType.Text](/hytale-unified-ui/scripting-reference/enums/commandArgInputType)

### defaultValue:String

Automatically populate an arg input with a default value.
