# FeatureDefinition

## Class

```java title="com.deezmods.unifiedui.api.definitions.FeatureDefinition"
package com.deezmods.unifiedui.api.definitions;

public class FeatureDefinition {
	public final String featureId;
	public final String displayName;
	public final List<String> worldFilter;
	public final List<GameMode> gameModeFilter;
	public final List<String> permissionFilters;
	public final BuildUserInterfaceCallback buildUserInterface;
	public final GetEventDefinitionsCallback getEventDefinitions;
	public final HandleEventCallback handleEvent;
}
```

## Summary

Defines how a feature should be displayed and function within Unified UI.

:::info

Module will be automatically determined and does not need to be included in featureId field.

Example: [featureId = "helloWorld" -> "com.example.plugin.helloWorld"]

This will only determine up to three modules deep -> "com.example.plugin"

:::

## Fields

### featureId:String

Is a unique id scoped to your module. Repeats can cause unexpected results in rendering and execution.

### displayName:String

Name of the feature. <strong>This supports i18n translation keys</strong>.

### worldFilter:List\<String>

Only show the feature in the Unified UI when world identified.

### gameModeFilter:List\<GameMode>

Only show the feature in the Unified UI when in the expected game mode.

### permissionFilters:List\<String>

Only show the feature in the Unified UI when a player has the expected permission.

### buildUserInterface:<u>[BuildUserInterfaceCallback](/hytale-unified-ui/scripting-reference/callbacks/buildUserInterfaceCallback)</u>

Defines a callback for UnifiedUI to call when it is time to render the content.

This will happen when UnifiedUI page is loaded, and #featureId is the default or selected tab.

### getEventDefinitions:<u>[GetEventDefinitionsCallback](/hytale-unified-ui/scripting-reference/callbacks/getEventDefinitionsCallback)</u>

Defines a callback which instructs UnifiedUI how and what to bind to.

### handleEvent:<u>[HandleEventCallback](/hytale-unified-ui/scripting-reference/callbacks/handleEventCallback)</u>

Defines a callback to handle events defined in #getEventDefinitions.
