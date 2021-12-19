//
// Copyright (c) 2021 - present by Pouya Kary <pouya@kary.us>
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import "https://deno.land/std@0.118.0/node/global.ts";
import { EMPTY_STRING } from "../source/constants/characters.ts";
import {
  CanvasView,
  LineView,
  PortableColor,
  PortableStyle,
  Presets,
  Shapes,
  ShapeView,
  StyleRendererProtocol,
} from "../source/index.ts";

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

export type RenderFunction = (value: number) => Promise<void>;
//
// ─── SLEEP ──────────────────────────────────────────────────────────────────────
//

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//
// ─── SET CURSOR TO BOTTOM ───────────────────────────────────────────────────────
//

export function setCursorToBottomRight(title = EMPTY_STRING) {
  const rows = process?.stdout?.rows ?? 25;
  const columns = process?.stdout?.columns ?? 80;
  process?.stdout?.write(
    `\x1b[${rows - 1};${columns - title.length - 1}H`,
  );
  if (title !== EMPTY_STRING) {
    process?.stdout?.write(
      title,
    );
  }
}

//
// ─── RENDERER LOOP ──────────────────────────────────────────────────────────────
//

export async function runRenderLoop(
  minValue: number,
  maxValue: number,
  func: RenderFunction,
) {
  while (true) {
    for (let value = minValue; value < maxValue; value++) {
      await func(value);
    }

    for (let value = maxValue; value > minValue; value--) {
      await func(value);
    }
  }
}

//
// ─── SET CONSOLE TITLE ──────────────────────────────────────────────────────────
//

export function setTerminalTitle(title: string) {
  process.stdout.write(
    String.fromCharCode(27) + "]0;" + title + String.fromCharCode(7),
  );
}

//
// ─── A GOOD MODEL ───────────────────────────────────────────────────────────────
//

export function createAGoodModel(styler: any) {
  //
  const canvas = new CanvasView(80, 20, styler);
  let zIndex = 1;

  //
  const redTeapot = ShapeView.initUtahTeapot(styler, {
    color: "red",
  });
  canvas.add(redTeapot, 4, 2, zIndex++);

  //
  const blueTeapot = ShapeView.initUtahTeapot(styler, {})
    .addStyle({ color: "blue" });
  canvas.add(blueTeapot, 20, 8, zIndex++);

  //
  const blueRectangleFrame = ShapeView.initBlankRectangle(20, 3, styler)
    .frame(Presets.LightBox)
    .addStyle({ color: "blue" });
  canvas.add(blueRectangleFrame, 20, 3, zIndex++);

  //
  const cyanRectangleFrame = ShapeView.initBlankRectangle(40, 7, styler)
    .frame(Presets.LightBox)
    .addStyle({ color: "cyan" });
  canvas.add(cyanRectangleFrame, 30, 5, zIndex++);

  //
  const text = new LineView("Hello, World!", styler, {
    color: "magenta",
    italic: true,
  });
  canvas.add(text, 40, 1, zIndex++);

  //
  const refPoint = new LineView("█", styler, {});

  canvas.add(refPoint, 0, 0, zIndex++);
  canvas.add(refPoint, canvas.width - 1, 0, zIndex++);
  canvas.add(refPoint, canvas.width - 1, canvas.height - 1, zIndex++);
  canvas.add(refPoint, 0, canvas.height - 1, zIndex++);

  return canvas;
}

// ────────────────────────────────────────────────────────────────────────────────
