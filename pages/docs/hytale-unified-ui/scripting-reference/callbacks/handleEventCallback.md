# HandleEventCallback

## Definition

```java title="com.deezmods.unifiedui.api.callbacks.HandleEventCallback"
package com.deezmods.unifiedui.api.callbacks;

@FunctionalInterface
public interface HandleEventCallback {
	CompletableFuture<Boolean> invoke(String actionName, Map<Integer, String> actionArgs, Map<Integer, String> actionData);
}
```
