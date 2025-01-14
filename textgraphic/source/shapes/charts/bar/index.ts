//
// Copyright (c) 2021 - present by Pouya Kary <pouya@kary.us>
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import {
  PortableColor,
  PortableStyle,
  StyleRendererProtocol,
} from "../../../protocols/index.ts";
import { CanvasView } from "../../../views/index.ts";

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

export interface BarChartDataPoint<ColorType> {
  value: number;
  label: string;
  color: ColorType;
}

export interface BarChartSettings<ColorType> {
  width: number;
  height: number;
  origin?: number;
  horizontal?: boolean;
  data: BarChartDataPoint<ColorType>[];
}

type InternalFixatedBarChartSettings<ColorType extends PortableColor> =
  Required<BarChartSettings<ColorType>>;

//
// ─── BAR CHART ──────────────────────────────────────────────────────────────────
//

export function createBarChart<
  ColorType extends PortableColor,
  EnvironmentStyleSettings extends PortableStyle<ColorType>,
>(
  renderer: StyleRendererProtocol<ColorType, EnvironmentStyleSettings>,
  settings: BarChartSettings<ColorType>,
): CanvasView<ColorType, EnvironmentStyleSettings> {
  //
  const fixatedSettings = fixSettings(settings);

  // DUMMY PLACE HOLDER
  return new CanvasView(1, 1, renderer);
}

//
// ─── FIX THE SETTINGS ───────────────────────────────────────────────────────────
//

function fixSettings<ColorType extends PortableColor>(
  settings: BarChartSettings<ColorType>,
): InternalFixatedBarChartSettings<ColorType> {
  //
  return {
    width: settings.width,
    height: settings.height,
    origin: settings.origin ? settings.origin : 0,
    horizontal: settings.horizontal ? settings.horizontal : false,
    data: settings.data,
  };
}

// ────────────────────────────────────────────────────────────────────────────────
