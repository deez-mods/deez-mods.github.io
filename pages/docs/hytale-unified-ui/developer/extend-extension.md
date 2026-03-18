---
sidebar_position: 3.0
---

# Extend Extension Class

The first step to building your own content is to extend the <strong>UnifiedUI API</strong> Extension class.

```java title="com.deezmods.unifiedui.api.UuiExtension"
public interface UuiExtension {
	CompletableFuture<List<FeatureDefinition>> getFeatures(PlayerRef playerRef);
	CompletableFuture<List<CommandDefinition>> getCommands(PlayerRef playerRef);
	CompletableFuture<Void> onPageClose();
}
```
