# Builder.io SDKs

These are our new-generation SDKs, generated by [Mitosis](https://github.com/BuilderIO/mitosis). We currently have the following SDKs:

- React-Native
- Vue 3
- Svelte
- SolidJS
- Angular
- Qwik
- React
- NextJS (Experimental for React Server Components registration support)

All the individual SDKs live in the [output](./output/) folder. The source Mitosis codebase lives in [src](./src/)

View the [Builder.io developer docs](https://www.builder.io/c/docs/developers) for how to use these SDKs

## Development

- To understand the overall architecture of the project, read our [ARCHITECTURE](./docs/ARCHITECTURE.md) guide.
- To contribute, read our [DEVELOP](./docs/DEVELOP.md) guide.
- To publish, read our [PUBLISHING](./PUBLISHING.md) guide.

## Fetch

This package uses fetch. See [these docs](https://github.com/BuilderIO/this-package-uses-fetch/blob/main/README.md) for more information.

## Node v20 + M1 Macs (Apple Silicon) Support

The SDKs rely on `isolated-vm`, a library to securely execute code on a Node server. There is a compatibility issue for that library when running on Node v20 and M1 Macs. To workaround this issue, you must provide `NODE_OPTIONS=--no-node-snapshot` to the command that runs your server.

If you do not provide this flag, the SDK will skip using `isolated-vm`. This will only occur on Apple Silicon machines that are running Node v20.

For more information, see [this issue](https://github.com/laverdet/isolated-vm/issues/424#issuecomment-1864629126).

# Feature Implementation

Legend:

- ✅: implemented
- 🏗: currently in progress
- ⚠️: not-yet implemented
- N/A : does not apply

## Builder Blocks

| Builder Blocks | Vue | React-Native | Svelte | Solid | Qwik | React | NextJS | Angular |
| -------------- | --- | ------------ | ------ | ----- | ---- | ----- | ------ | ------- |
| Columns        | ✅  | ✅           | ✅     | ✅    | ✅   | ✅    | ✅     | ✅      |
| Text           | ✅  | ✅           | ✅     | ✅    | ✅   | ✅    | ✅     | ✅      |
| Image          | ✅  | ✅           | ✅     | ✅    | ✅   | ✅    | ✅     | ✅      |
| Button         | ✅  | ✅           | ✅     | ✅    | ✅   | ✅    | ✅     | ✅      |
| Video          | ✅  | 🏗           | ✅     | ✅    | ✅   | ✅    | ✅     | ✅      |
| Custom Code    | ✅  | 🏗           | ✅     | ✅    | ✅   | ✅    | ✅     | ✅      |
| Section        | ✅  | ✅           | ✅     | ✅    | ✅   | ✅    | ✅     | ✅      |
| Fragment       | ✅  | ✅           | ✅     | ✅    | ✅   | ✅    | ✅     | ✅      |
| Embed          | ✅  | 🏗           | ✅     | ✅    | ✅   | ✅    | ✅     | ✅      |
| Slot           | ✅  | ✅           | ✅     | ✅    | ✅   | ✅    | ✅     | ✅      |
| Form           | ✅  | 🏗           | ✅     | ✅    | ✅   | ✅    | 🏗️     | ✅      |
| Input          | ✅  | 🏗           | ✅     | ✅    | ✅   | ✅    | 🏗️     | ✅      |
| Select         | ✅  | 🏗           | ✅     | ✅    | ✅   | ✅    | 🏗️     | ✅      |
| SubmitButton   | ✅  | 🏗           | ✅     | ✅    | ✅   | ✅    | 🏗️     | ✅      |

## Builder Widgets

| Builder Widgets | Vue | React-Native | Svelte | Solid | Qwik | React | NextJS | Angular |
| --------------- | --- | ------------ | ------ | ----- | ---- | ----- | ------ | ------- |
| Tabs            | ✅  | ✅           | ✅     | ✅    | ✅   | ✅    | 🏗     | ✅      |
| Accordion       | ✅  | ✅           | ✅     | ✅    | ✅   | ✅    | 🏗️     | ✅      |
| Carousel        | 🏗  | 🏗           | 🏗     | 🏗    | 🏗   | 🏗    | 🏗️     | 🏗      |
| Masonry         | 🏗  | 🏗           | 🏗     | 🏗    | 🏗   | 🏗    | 🏗️     | 🏗      |

## Features

| Features                       | Qwik | React | NextJS                                   | Vue | React-Native        | Svelte | Solid | Angular | Details |
| ------------------------------ | ---- | ----- | ---------------------------------------- | --- | ------------------- | ------ | ----- | ------- | ------- |
| TypeScript Types               | ✅   | ✅    | ✅                                       | ✅  | 🏗                  | ✅     | 🏗    | ✅      |         |
| A/B Tests                      | ✅   | ✅    |                                          | ✅  | ✅                  | ✅     | ✅    | ✅      |         |
| A/B Tests with SSG/SSR Support | ✅   | ✅    |                                          | ✅  | ❌ (Does not apply) | ✅     | ✅    | ✅      |         |
| SSR                            | ✅   | ✅    | ✅                                       | ✅  | ❌ (Does not apply) | ✅     | ✅    | ✅      |         |
| Children for Custom Components | ✅   | ✅    | ✅                                       | ✅  | ✅                  | ✅     | ✅    | ✅      |         |
| Dynamic Data Bindings          | ✅   | ✅    | ✅ (cannot update bindings after SSR)    | ✅  | ✅                  | ✅     | ✅    | ✅      |         |
| View Current Draft             | ✅   | ✅    | ✅                                       | ✅  | ✅                  | ✅     | ✅    | ✅      |         |
| Symbols                        | ✅   | ✅    | ✅                                       | ✅  | ✅                  | ✅     | ✅    | ✅      |         |
| Custom styles                  | ✅   | ✅    | ✅                                       | ✅  | ✅                  | ✅     | ✅    | ✅      |         |
| Custom fonts                   | ✅   | ✅    | ✅                                       | ✅  | ❌ (Does not apply) | ✅     | ✅    | ✅      |         |
| Heatmaps                       | ✅   | ✅    | ✅                                       | ✅  | ✅                  | ✅     | ✅    | ✅      |         |
| Tracking/Analytics             | ✅   | ✅    | ✅                                       | ✅  | ✅                  | ✅     | ✅    | ✅      |         |
| Animations                     | ✅   | ✅    | 🏗                                       | ✅  | 🏗                  | ✅     | ✅    | ✅      |         |
| Custom Actions/Events          | ✅   | ✅    | ✅ (cannot update `state` interactively) | ✅  | ✅                  | ✅     | ✅    | ✅      |         |
| Builder's global `state`       | ✅   | ✅    | ✅ (cannot update `state` interactively) | ✅  | ✅                  | ✅     | ✅    | ✅      |         |
| Widgets                        | 🏗   | ✅    | ✅                                       | 🏗  | 🏗                  | 🏗     | 🏗    | 🏗      |         |
| Global Content Styles          | ✅   | ✅    | ✅                                       | ✅  | ❌ (Does not apply) | ✅     | ✅    | ✅      |         |
| CSS Nesting (`&` operator)     | ✅   | ✅    | ✅                                       | ✅  | ❌ (Does not apply) | ✅     | ✅    | ✅      |         |
| Locale Support                 | ✅   | ✅    | ✅                                       | ✅  | ✅                  | ✅     | ✅    | ✅      |         |
| Variant Containers             | ✅   | ✅    | 🏗                                       | ✅  | 🏗                  | ✅     | 🏗    | 🏗      |         |
