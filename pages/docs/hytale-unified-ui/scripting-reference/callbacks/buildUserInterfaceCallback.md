# BuildUserInterfaceCallback

## Definition

```java title="com.deezmods.unifiedui.api.callbacks.BuildUserInterfaceCallback"
package com.deezmods.unifiedui.api.callbacks;

@FunctionalInterface
public interface BuildUserInterfaceCallback {
	CompletableFuture<Void> invoke(UICommandBuilder builder);
}
```
