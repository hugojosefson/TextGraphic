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
import * as TextGraphic from "../source/index.ts";
import * as http from "http";
import * as fs from "fs";
import * as path from "path";
import { homedir } from "os";

//
// ─── STYLE ──────────────────────────────────────────────────────────────────────
//

const htmlStyle = (`
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Testing TextGraphic</title>
            </head>
            <body>
            <style>
                textgraphic-row {
                display: block;
                white-space: pre;
                font-family: monospace;
                line-height: 1;
                }
            </style>`);

//
// ─── SHAPE ──────────────────────────────────────────────────────────────────────
//

function generateShape(renderer: TextGraphic.StyleRendererProtocol<any, any>) {
  const text = new TextGraphic.LineView("Hello, World!", renderer, {
    textColor: "red",
  });

  const bird = TextGraphic.ShapeView.initArendelleBird(renderer);
  bird.addStyle({ textColor: "blue" });

  const canvas = new TextGraphic.CanvasView(40, 15, renderer);

  canvas.add(text, 5, 1, 0);
  canvas.add(text, 20, 1, 0);
  canvas.add(bird, 2, 3, 0);
  canvas.add(text, 10, 7, 1);

  return canvas.styledForm;
}

//
// ─── RENDERS ────────────────────────────────────────────────────────────────────
//

const htmlRender = generateShape(
  new TextGraphic.Environments.HTML.HTMLStyleRenderer(),
);

const terminalRender = generateShape(
  new TextGraphic.Environments.ANSITerminal.ANSITerminalStyleRenderer(),
);

const svgRender = generateShape(
  new TextGraphic.Environments.SVG.SVGStyleRenderer(true, {
    fontSize: 13,
    fontFamily: "Menlo",
  }),
);

//
// ─── SERVER ─────────────────────────────────────────────────────────────────────
//

// web
const server = http.Server((req, res) => {
  res.statusCode = 200, res.setHeader("Content-Type", "text/html");
  res.end(htmlStyle + htmlRender + "</body></html>");
  process.exit(0);
});

server.listen(9090, "127.0.0.1");

// svg
fs.writeFileSync(
  path.join(homedir() ?? process.env.HOME, "Desktop", "render.svg"),
  svgRender,
);

// terminal
console.log("Running the test Web Renderer server on port 9090, rendering:");
console.log(terminalRender);

// ────────────────────────────────────────────────────────────────────────────────
