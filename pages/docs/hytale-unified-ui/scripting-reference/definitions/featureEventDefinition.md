# FeatureEventDefinition

## Class

```java title="com.deezmods.unifiedui.api.definitions.FeatureEventDefinition"
package com.deezmods.unifiedui.api.definitions;

public class FeatureEventDefinition {
	String eventSelector,
	String eventAction,
	CustomUIEventBindingType eventBindingType,
	Map<Integer, String> eventArgs,
	Map<Integer, String> eventData
}
```

## Summary

Defines how an event should be mapped for UI built in the [FeatureDefinition.buildUserInterface](/hytale-unified-ui/scripting-reference/definitions/featureDefinition#builduserinterfacebuilduserinterfacecallback) callback.

## Fields

### eventSelector: String

The id of the element to target. Example #TextField

### eventAction: String

Define actionName passed into the [FeatureDefinition.handleEvent](/hytale-unified-ui/scripting-reference/definitions/featureDefinition#handleeventhandleeventcallback) callback.

### eventBindingType: CustomUIEventBindingType

The Hytale CustomUI element trigger type.

### eventArgs: Map\<Integer, String>

Data that should be returned from code.

### eventData: Map\<String, String>

Data that should be returned from element selectors.
