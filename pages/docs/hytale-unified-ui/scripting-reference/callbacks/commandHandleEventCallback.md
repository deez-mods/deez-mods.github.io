# CommandHandleEventCallback

## Definition

```java title="com.deezmods.unifiedui.api.callbacks.CommandHandleEventCallback"
package com.deezmods.unifiedui.api.callbacks;

@FunctionalInterface
public interface CommandHandleEventCallback {
	CompletableFuture<Void> invoke(Map<String, String> commandArgs);
}
```
