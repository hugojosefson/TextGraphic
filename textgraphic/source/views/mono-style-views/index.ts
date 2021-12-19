//
// Copyright (c) 2021 - present by Pouya Kary <pouya@kary.us>
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import { LineView } from "./views/line-view/index.ts";
import { ShapeView } from "./views/shape-view/index.ts";
import { PortableColor, PortableStyle } from "../../protocols/index.ts";

//
// ─── EXPORTS ────────────────────────────────────────────────────────────────────
//

export type MonoStyleViews<
  ColorType extends PortableColor,
  EnvironmentStyleSettings extends PortableStyle<ColorType>,
> =
  | ShapeView<ColorType, EnvironmentStyleSettings>
  | LineView<ColorType, EnvironmentStyleSettings>;

export * from "./views/line-view/index.ts";
export * from "./views/shape-view/index.ts";

// ────────────────────────────────────────────────────────────────────────────────
