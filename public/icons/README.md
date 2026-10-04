# Shared leaf branding

`icon.svg`, `icon.png`, `icon.jpg`, the Android adaptive layers, and
`leaf-outline.svg` are copied from the mobile project's `assets` directory.
The leaf is Ionicons `leaf-outline`; its MIT license is in `IONICONS-LICENSE`.

The site header and footer use `icon.svg`. Inline decorative leaf icons in
`src/main.tsx` use the same vector paths and inherit the surrounding color.

Web exports from the 1024px PNG:

- `/favicon.svg`: scalable full app icon.
- `/favicon.png`: 48px browser icon.
- `/favicon.ico`: 16px, 32px, and 48px browser fallback.
- `/apple-touch-icon.png`: 180px Apple home screen icon.
- `icon-192.png` and `icon-512.png`: browser shortcut icons referenced by
  `/site.webmanifest`.
