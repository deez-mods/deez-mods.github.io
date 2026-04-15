# StatDefinition

## Definition

```java title="com.deezmods.unifiedui.api.definitions.StatDefinition"
package com.deezmods.unifiedui.api.definitions;

public class StatDefinition {
	public final String statId;
	public final @Nullable String linkedFeatureId;
	public final Boolean usingFeatureIdOverride;
	public final String displayName;
	public final String tooltipText;
	public final String iconPath;
	public final List<String> worldFilter;
	public final List<GameMode> gameModeFilter;
	public final List<String> permissionFilters;
	public final String statValue;
	public final @Nullable CompletableFuture<Void> onStatClick;
}
```

## Summary

Defines how a stat should be displayed and within Unified UI.

:::info
Setting `statId` and `linkedFeatureId` only needs to be unique to your own extension.
When being processed with UnifiedUI, your `manifest.json` will use Group and Name fields to prefix the ID.

If you wish to target a feature from a different extension, the enable `usingFeatureIdOverride` and provide the full featureId in `linkedFeatureId`. See `/help uui` for a command to help find the full featureId.
:::

## Builder

```Java
var statBuilder = new StatDefinition.Builder("statId", "displayName", "statValue");

public Builder(String statId, String displayName, String statValue);

public Builder withStatId(String statId);

public Builder withLinkedFeatureId(String linkedFeatureId);

public Builder withFeatureIdOverride(Boolean usingFeatureIdOverride);

public Builder withDisplayName(String displayName);

public Builder withTooltipText(String tooltipText);

public Builder withIconPath(String iconPath);

public Builder withWorldFilter(List<String> worldFilter);

public Builder withGameModeFilter(List<GameMode> gameModeFilter);

public Builder withPermissionFilters(List<String> permissionFilters);

public Builder withStatValue(String statValue);

public Builder withOnStatClick(CompletableFuture<Void> onStatClick);

public StatDefinition build();

var stat = statBuilder.build();
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
      <td>statId</td>
      <td>Is a unique id scoped to your module. Repeats can cause unexpected results in rendering and execution</td>
    </tr>
    <tr>
      <td>linkedFeatureId</td>
      <td>ID of a feature to link to. When stat is clicked, if linkedFeatureId is present then the selected feature panel will change.</td>
    </tr>
	<tr>
      <td>usingFeatureIdOverride</td>
      <td>Determine weather to treat linkedFeatureId as a local or external featureId. If true, then it won't be prefixed at build time.</td>
    </tr><tr>
      <td>displayName</td>
      <td>Name of the command. <strong>This supports i18n translation keys</strong></td>
    </tr>
	<tr>
      <td>tooltipText</td>
      <td>Short description of the stat to display on mouse hover. <strong>This supports i18n translation keys</strong></td>
    </tr>
	<tr>
      <td>iconPath</td>
      <td>The relative path for an image asset to be used as the stat icon.</td>
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
      <td>statValue</td>
      <td>The string to display the represents the stat value.</td>
    </tr>
	<tr>
      <td>onStatClick</td>
      <td>A callback for when a stat is clicked. This could be used to set state for a feature page before navigating, etc.</td>
    </tr>
  </tbody>
</table>
