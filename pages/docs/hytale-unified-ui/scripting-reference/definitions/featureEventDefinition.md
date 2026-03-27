# FeatureEventDefinition

## Definition

```java title="com.deezmods.unifiedui.api.definitions.FeatureEventDefinition"
package com.deezmods.unifiedui.api.definitions;

public record FeatureEventDefinition (
	String eventSelector,
	String eventAction,
	CustomUIEventBindingType eventBindingType,
	Map<Integer, String> eventArgs,
	Map<Integer, String> eventData
){}
```

## Summary

Defines how an event should be mapped for UI built in the [FeatureDefinition.buildUserInterface](/hytale-unified-ui/scripting-reference/definitions/featureDefinition#fields) callback.

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
      <td>eventSelector</td>
      <td>The id of the element to target. Example #TextField</td>
	</tr>
	<tr>
	  <td>eventAction</td>
      <td>Define actionName passed into the [FeatureDefinition.handleEvent](/hytale-unified-ui/scripting-reference/definitions/featureDefinition#fields) callback.</td>
	</tr>
	<tr>
	  <td>eventBindingType</td>
      <td>The Hytale CustomUI element trigger type.</td>
	</tr>
	<tr>
	  <td>eventArgs</td>
      <td>Data that should be returned from code.</td>
	</tr>
	<tr>
	  <td>eventData</td>
      <td>Data that should be returned from element selectors.</td>
    </tr>
  </tbody>
</table>
