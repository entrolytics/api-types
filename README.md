# @entrolytics/api-types

Shared API types for Entrolytics - First-party growth analytics for the edge.

## Purpose

This package publishes the canonical `AppRouter` type for consumers that want a stable npm import boundary.

## Usage

```ts
import type { AppRouter } from '@entrolytics/api-types'
```

## Build

The build process regenerates declarations from `apps/api` and copies the declaration graph into `dist/`.
