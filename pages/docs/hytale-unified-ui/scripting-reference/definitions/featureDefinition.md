# FeatureDefinition

## Definition

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

**Call Order:**<br/>
`withBuildUserInterface` and `withGetEventDefinitions` will get called when it is time to render the content. `withBuildUserInterface` will be called first, which can be used to define any indexed arrays used in conjunction with `withGetEventDefinitions` event selectors.

:::info
`featureId` only needs to be unique to your own extension.
When being processed with UnifiedUI, your `manifest.json` will use Group and Name fields to prefix the ID.
:::

## Builder

```Java
var featureBuilder = new FeatureDefinition.Builder("featureId", "displayName");

public Builder(String featureId, String displayName);

public Builder withFeatureId(String featureId);

public Builder withWorldFilter(List<String> worldFilter);

public Builder withGameModeFilter(List<GameMode> gameModeFilter);

public Builder withPermissionFilters(List<String> permissionFilters);

public Builder withBuildUserInterface(FeatureBuildCallback buildUserInterface);

public Builder withGetEventDefinitions(FeatureGetEventsCallback getEventDefinitions);

public Builder withHandleEvent(FeatureHandleEventCallback handleEvent);

public FeatureDefinition build();

var feature = featureBuilder.build();
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
      <td>featureId</td>
      <td>Is a unique id scoped to your module. Repeats can cause unexpected results in rendering and execution.</td>
    </tr>
	<tr>
      <td>displayName</td>
      <td>Name of the feature. <strong>This supports i18n translation keys</strong>.</td>
    </tr>
	<tr>
      <td>worldFilter</td>
      <td>Only show the feature in the Unified UI when world identified.</td>
    </tr>
	<tr>
      <td>gameModeFilter</td>
      <td>Only show the feature in the Unified UI when in the expected game mode.</td>
    </tr>
	<tr>
      <td>permissionFilters</td>
      <td>Only show the feature in the Unified UI when a player has the expected permission.</td>
    </tr>
	<tr>
      <td>buildUserInterface</td>
      <td>Defines a callback for UnifiedUI to call when it is time to render the content.<br/>See [BuildUserInterfaceCallback](/hytale-unified-ui/scripting-reference/callbacks/buildUserInterfaceCallback).</td>
    </tr>
	<tr>
      <td>getEventDefinitions</td>
      <td>Defines a callback which instructs UnifiedUI how and what to bind to.<br/>See [GetEventDefinitionsCallback](/hytale-unified-ui/scripting-reference/callbacks/getEventDefinitionsCallback).</td>
    </tr>
	<tr>
      <td>handleEvent</td>
      <td>Defines a callback to handle events defined in `getEventDefinitions`.<br/>See [HandleEventCallback](/hytale-unified-ui/scripting-reference/callbacks/handleEventCallback).</td>
    </tr>
  </tbody>
</table>
