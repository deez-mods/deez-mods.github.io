---
sidebar_position: 1.0
---

# Installation and Setup

## Choose Support Level

To extend UnifiedUI and make your own extensions, you will need a minimum of one plugin.

| Minimum Support | Full Support                |
| --------------- | --------------------------- |
| UnifiedUI:API   | UnifiedUI and UnifiedUI:API |

:::info[Full Support]
Use the full support option if you want to exclusively use the UnifiedUI interface. And or want to be able to use the shared `.ui` library files UnifiedUI provides.
:::

:::secondary[Minimum Support]
Use the minimum support option if you do not want to add a hard dependency to the UnifiedUI interface. Meaning you want to ship your plugin with your own UI, but have the option there for players if they already use UnifiedUI.

Due to Hytale doing file validation on startup, you will not be able to use any shared `.ui` library files UnifiedUI provides from you own `.ui` files. However they will still work when using the builders `appendInline()` method as that is processed only when the UnifiedUI interface is displayed.
:::

## Add Project Dependencies

Below example shows how to install using gradle.

- Dependencies must be imported as compileOnly. If using as an implementation dependency then your plugin will never talk to the instance that Hytale Server loads.
- See https://www.cursemaven.com for additional support.

```json title="build.gradle"
repositories {
    maven { url "https://www.cursemaven.com" }
}

dependencies {
	// UnifiedUI Project ID: 1494464
	// UnifiedUI v1.0.0 ID: 7816828
    compileOnly "curse.maven:unifiedui-1494464:7816828"
    // UnifiedUI:API Project ID: 1494489
	// UnifiedUI:API v1.0.0 ID: 7816895
    compileOnly "curse.maven:unifiedui-api-1494489:7816895"
}
```

## Add Manifest Dependencies

If using the full support options, then add `DeezMods:UnifiedUI` to the Dependencies object instead of OptionalDependencies.

```json title="manifest.json"
  "Dependencies": {
    "DeezMods:UnifiedUI.API": "*"
  },
  "OptionalDependencies": {
	"DeezMods:UnifiedUI": "*"
  },
```

## Add Server Mod Files

In addition to adding the project dependencies, ensure the mod files are also saved to the mods folder of the hytale world you are testing on.

1. Download the latest versions.
   - [UnifiedUI](https://www.curseforge.com/hytale/mods/unifiedui/files/all)
   - [UnifiedUI:API](https://www.curseforge.com/hytale/mods/unifiedui-api/files/all)
2. Place the JAR files into your server's `/mods` folder
3. Restart the server

## Setup Extension Boilerplate

This is a copy 'n' paste setup that will get your project initialized and registering the UuiExtension implementation.

From here, you can explore the rest of the docs to diver deeper into the [UuiExtension](/hytale-unified-ui/scripting-reference/uuiExtension) class. Then start implementing your first command or feature.

```Java
public class ExampleExtension implements UuiExtension {
	@Override
	public CompletableFuture<List<FeatureDefinition>> getFeatures(PlayerRef playerRef) {
		return CompletableFuture.supplyAsync(() -> {
			List<FeatureDefinition> featureDetails = new ArrayList<>();
			return featureDetails;
		});
	}

	@Override
	public CompletableFuture<List<CommandDefinition>> getCommands(PlayerRef playerRef) {
		return CompletableFuture.supplyAsync(() -> {
			List<CommandDefinition> commandDefinitions = new ArrayList<>();
			return commandDefinitions;
		});
	}

	@Override
	public CompletableFuture<Void> onPageClose() {
		return CompletableFuture.completedFuture(null);
	}
}
```

```Java
public class Example extends JavaPlugin {
	@Override
	public CompletableFuture<Void> preLoad() {
		super.preLoad();
		UuiApi.registerExtension(new ExampleExtension(), this);
		return CompletableFuture.completedFuture(null);
	}
}
```
