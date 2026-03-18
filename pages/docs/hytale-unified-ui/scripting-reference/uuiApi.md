---
sidebar_position: 1
---

# UuiApi

## Class

```java title="com.deezmods.unifiedui.api.UuiApi"
package com.deezmods.unifiedui.api;

public class UuiApi extends JavaPlugin {
	public static void registerExtension(UuiExtension extension);
}
```

## Example

```java
public class ExampleExtension implements UuiExtension {}

public class Example extends JavaPlugin {
	@Override
	public CompletableFuture<Void> preLoad() {
		super.preLoad();
		UuiApi.registerExtension(new ExampleExtension());
		return CompletableFuture.completedFuture(null);
	}
}

```
