---
sidebar_position: 2
---

import { UnifiedUiLabel } from "@site/src/components/labels/unified-ui-label";

# UuiExtension

## Class

```java title="com.deezmods.unifiedui.api.UuiExtension"
package com.deezmods.unifiedui.api;

public interface UuiExtension {
	CompletableFuture<List<FeatureDefinition>> getFeatures(PlayerRef playerRef);
	CompletableFuture<List<CommandDefinition>> getCommands(PlayerRef playerRef);
	CompletableFuture<Void> onPageClose();
}
```

## Methods

### getFeatures(PlayerRef) -> <u>[FeatureDefinition](/hytale-unified-ui/scripting-reference/definitions/featureDefinition)</u>[]

Get features is called when the player open the <UnifiedUiLabel strong/> page. This gives the developer an opportunity to set custom logic based on the player. The initial call it to determine information about the feature, and to provide additional callback's when the feature is selected to render.

### getCommands(PlayerRef) -> <u>[CommandDefinition](/hytale-unified-ui/scripting-reference/definitions/commandDefinition)</u>[]

Get commands is called when the player open the <UnifiedUiLabel strong/> page. This gives the developer an opportunity to set custom logic based on the player. The returned CommandDefinition's will then be used immediately to render in the commands panel.

### onPageClose

On page close is method used for cleanup, so any state that you don't want to be carried over between page loads can be reset.

## Example

```java
public class ExampleExtension implements UuiExtension {
	@Override
	public CompletableFuture<List<FeatureDefinition>> getFeatures(PlayerRef playerRef) {
		List<FeatureDefinition> featureDetails = new ArrayList<>();
		return CompletableFuture.completedFuture(featureDetails);
	}

	@Override
	public CompletableFuture<List<CommandDefinition>> getCommands(PlayerRef playerRef) {
		List<CommandDefinition> commandDefinitions = new ArrayList<>();
		return CompletableFuture.completedFuture(commandDefinitions);
	}

	@Override
	public CompletableFuture<Void> onPageClose() {
		return CompletableFuture.completedFuture(null);
	}
}

public class Example extends JavaPlugin {
	@Override
	public CompletableFuture<Void> preLoad() {
		super.preLoad();
		UuiApi.registerExtension(new ExampleExtension());
		return CompletableFuture.completedFuture(null);
	}
}

```
