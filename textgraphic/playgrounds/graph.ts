//
// Copyright (c) 2021 - present by Pouya Kary <pouya@kary.us>
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import * as TextGraphic from "../source/index.ts";
import * as Tools from "./tools.ts";

//
// ─── RENDERER ───────────────────────────────────────────────────────────────────
//

const renderer = new TextGraphic.Environments.ANSITerminal
  .ANSITerminalStyleRenderer();

//
// ─── GRAPH VIEW ─────────────────────────────────────────────────────────────────
//

async function generateGraph(iteration: number) {
  const HPadding = 6;
  const VPadding = 2;
  const WIDTH = (process.stdout.columns ?? 80) - HPadding * 2;
  const HEIGHT = (process.stdout.rows ?? 25) - VPadding * 2 - 1;
  const GRAPH_COLOR = "red";
  const GUIDES_COLOR = "blue";

  // graph
  const graph = TextGraphic.Shapes.Graph.create({
    renderer,
    //
    width: WIDTH,
    height: HEIGHT,
    style: { color: GRAPH_COLOR },
    verticalZoom: 0.8,
    //
    formula: (x, y) => {
      const thickness = 0.12;
      const theta = Math.sin(x * iteration / 2);
      return (y < theta + thickness) && (y > theta - thickness);
    },
  });

  // grid
  const hLine = new TextGraphic.LineView(
    "─".repeat(WIDTH - 1) + "▶︎",
    renderer,
    { color: GUIDES_COLOR },
  );
  const vLineLines = ["▲"];
  for (let row = 1; row < HEIGHT; row++) {
    vLineLines.push("│");
  }

  const vLine = new TextGraphic.ShapeView(vLineLines, 0, renderer, {
    color: GUIDES_COLOR,
  }, false);

  const grid = new TextGraphic.CanvasView(WIDTH, HEIGHT, renderer);
  const dy = Math.floor(HEIGHT / 2) + 1;
  const dx = Math.floor(WIDTH / 2);

  grid.add(hLine, 0, dy, 1);
  grid.add(vLine, dx, 0, 2);
  grid.fineTuneBoxIntersectionsAtPoint(dx, dy);

  // background
  const background = new TextGraphic.CanvasView(WIDTH, HEIGHT, renderer);
  background.add(grid, 0, 0, 1);
  background.add(graph, 0, 0, 2);

  const margined = background.applyMargin(VPadding, HPadding, 0, HPadding);

  console.clear();
  console.log(margined.styledForm);
  Tools.setCursorToBottomRight("TextGraphic GraphView Demo ");
  await Tools.sleep(100);
}

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

Tools.runRenderLoop(1, 40, generateGraph);

// ────────────────────────────────────────────────────────────────────────────────
