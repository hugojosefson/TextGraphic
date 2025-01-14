//
// Copyright (c) 2021 - present by Pouya Kary <pouya@kary.us>
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import { PortableColor } from "../../protocols/index.ts";
import * as EscapeSequences from "./escape-sequences.ts";

//
// ─── PORTABLE COLOR IMPLEMENTATION ──────────────────────────────────────────────
//

export function convertPortableColorToANSITerminalColor(
  color: PortableColor,
  isBackground: boolean,
): string {
  //

  if (typeof color === "string") {
    if (isBackground) {
      return EscapeSequences.getBackgroundColorEscapeSequenceForLabledColor(
        color,
      );
    } else {
      return EscapeSequences.getForegroundColorEscapeSequenceForLabledColor(
        color,
      );
    }
  }

  return EscapeSequences.formatColorTo24BitANSITerminalColor(
    color,
    isBackground,
  );
}

// ────────────────────────────────────────────────────────────────────────────────
