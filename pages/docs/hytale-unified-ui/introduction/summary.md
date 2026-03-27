---
sidebar_position: 1
title: Summary
hide_title: true
---

<div class="image-card">
	![Screenshot](img/summary-header.png)
</div>

## Summary

A Hytale mod to expand on the current user interface. Allowing players, server admins, and developers to inject custom menu options or commands.

The custom interface displays two main sections. A commands list, and and addon menu. Developers can add custom menu items and display their own embedded UI's, or provide one-click commands with arguments support.

## Dependency

This UnifiedUI plugin has a dependency on the [UnifiedUI: API](https://www.curseforge.com/hytale/mods/unifiedui-api) plugin. If installing mods directly via Curseforge, then dependency installation is handled automatically.

## Permissions

Support has been tested for default Hytale permissions and LuckPerm. Any other permission modules that utilizes the Hytale Server permission interface should be supported.

- com.deezmods.unifiedui.admin-read
- com.deezmods.unifiedui.admin-write

## Commands

Displaying the UI is as easy as running `/uui` in the chat box. For additional commands, type `/help uui`

## Roadmap

- Add functionality for Admins and Players to write their own command shortcuts.
- Add ability to change default page title to own name.
- Add currency/value section to UI that can be linked to an Addon Menu page.
- Add getting-started extension by default in this package.
- Develop additional extensions like Admin Essentials.

## Developers

Here is a high-level preview of the interface you would be working with. The main entry point for extensions is three methods. Read more here [Installation and Setup](/hytale-unified-ui/developer-section/installation-and-setup).

```Java
package com.deezmods.unifiedui.api;

public interface UuiExtension {
    CompletableFuture<List<FeatureDefinition>> getFeatures(PlayerRef playerRef);
    CompletableFuture<List<CommandDefinition>> getCommands(PlayerRef playerRef);
    CompletableFuture<Void> onPageClose();
}
```

## Unofficial Extensions

You can browse all possible extensions by visiting the UnifiedUI:API dependents page [https://legacy.curseforge.com/hytale/mods/unifiedui-api/relations/dependents](https://legacy.curseforge.com/hytale/mods/unifiedui-api/relations/dependents).
