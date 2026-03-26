---
sidebar_position: 1.1
---

# Installation

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
:::

## Project Dependencies

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

## Mod Dependencies

In addition to adding the project dependencies, ensure the mod files are also save to the mods folder of the hytale world you are testing on.

1. Download the latest versions.
   - [UnifiedUI](https://www.curseforge.com/hytale/mods/unifiedui/files/all)
   - [UnifiedUI:API](https://www.curseforge.com/hytale/mods/unifiedui-api/files/all)
2. Place the JAR files into your server's `/mods` folder
3. Restart the server
