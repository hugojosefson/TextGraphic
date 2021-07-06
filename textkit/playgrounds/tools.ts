
//
// Copyright (c) 2021 - present by Pouya Kary <pouya@kary.us>
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//


//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    import { EMPTY_STRING }
        from "../source/constants/characters"

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

    export type RenderFunction =
        ( value: number ) => Promise<void>
//
// ─── SLEEP ──────────────────────────────────────────────────────────────────────
//

    export function sleep ( ms: number ) {
        return new Promise( resolve => setTimeout( resolve, ms ) )
    }

//
// ─── SET CURSOR TO BOTTOM ───────────────────────────────────────────────────────
//

    export function setCursorToBottomRight ( title = EMPTY_STRING ) {
        process.stdout.write(
            `\x1b[${ process.stdout.rows - 1 };${ process.stdout.columns - title.length - 1 }H`
        )
        if ( title !== EMPTY_STRING ) {
            process.stdout.write(
                title
            )
        }
    }

//
// ─── RENDERER LOOP ──────────────────────────────────────────────────────────────
//

    export async function runRenderLoop ( minValue: number, maxValue: number, func: RenderFunction ) {
        while ( true ) {
            for ( let value = minValue; value < maxValue; value++ ) {
                await func( value )
            }

            for ( let value = maxValue; value > minValue; value-- ) {
                await func( value )
            }
        }
    }

//
// ─── SET CONSOLE TITLE ──────────────────────────────────────────────────────────
//

    export function setTerminalTitle ( title: string ) {
        process.stdout.write(
            String.fromCharCode(27) + "]0;" + title + String.fromCharCode(7)
        )
    }

// ────────────────────────────────────────────────────────────────────────────────
