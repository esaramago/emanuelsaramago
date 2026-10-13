/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    /**
     * Custom flex grow shortcut used across `es-stack` layouts.
     * Accepts the same string values as the HTML attribute.
     */
    grow?: string
  }
}