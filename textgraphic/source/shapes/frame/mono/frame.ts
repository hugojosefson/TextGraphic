//
// Copyright (c) 2021 - present by Pouya Kary <pouya@kary.us>
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import { MonoStyleViews } from "../../../views/index.ts";
import { ShapeView } from "../../../views/index.ts";
import { BoxFrameCharSet } from "../../../presets/index.ts";
import { PortableColor, PortableStyle } from "../../../protocols/index.ts";

//
// ─── FRAME SHAPE VIEW ───────────────────────────────────────────────────────────
//

export function frameMonoStyledViews<
  ColorType extends PortableColor,
  EnvironmentStyleSettings extends PortableStyle<ColorType>,
>(
  box: MonoStyleViews<ColorType, EnvironmentStyleSettings>,
  charSet: BoxFrameCharSet,
): ShapeView<ColorType, EnvironmentStyleSettings> {
  //
  const firstLine = charSet.topLeft + charSet.top.repeat(box.width) +
    charSet.topRight;
  const lastLine = charSet.bottomLeft + charSet.bottom.repeat(box.width) +
    charSet.bottomRight;
  const middleLines = box.lines.map((line) =>
    charSet.left + line + charSet.right
  );
  const lines: string[] = [firstLine, ...middleLines, lastLine];
  const result = new ShapeView(
    lines,
    box.baseline + 1,
    box.styleRenderer,
    box.style,
    box.transparent,
  );
  return result;
}

// ────────────────────────────────────────────────────────────────────────────────
