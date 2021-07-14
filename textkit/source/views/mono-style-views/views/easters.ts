
//
// Copyright (c) 2021 - present by Pouya Kary <pouya@kary.us>
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//


//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    import { ShapeView }
        from "./shape-view"
    import { StyleRendererProtocol, PortableStyle }
        from "../../../protocols"


//
// ─── BIRD ───────────────────────────────────────────────────────────────────────
//

    export function createArendelleBird <EnvironmentStyleSettings extends PortableStyle<any>> (
            styler: StyleRendererProtocol<EnvironmentStyleSettings>,
            style:  Partial<EnvironmentStyleSettings>,
        ) {

        //
        const lines = [
            "  ██████        ",
            "████  ██        ",
            "  ██████        ",
            "  ████████      ",
            "  ██████████████",
            "  ████████████  ",
            "  ████████      ",
            "    ██          ",
        ]

        return new ShapeView( lines, 4, styler, style, true )
    }

//
// ─── ALIEN ──────────────────────────────────────────────────────────────────────
//

    export function createArendelleAlien <EnvironmentStyleSettings extends PortableStyle<any>> (
            styler: StyleRendererProtocol<EnvironmentStyleSettings>,
            style:  Partial<EnvironmentStyleSettings>,
        ) {

        //
        const lines = [
            "  ██████████  ",
            "  ████  ████  ",
            "  ██████████  ",
            "    ██████    ",
            "██████████████",
            "██  ██  ██  ██",
            "    ██  ██    ",
            "  ████  ████  ",
        ]

        return new ShapeView( lines, 4, styler, style, true  )
    }

//
// ─── UTAH TEAPOT ────────────────────────────────────────────────────────────────
//

    export function createUtahTeapot <EnvironmentStyleSettings extends PortableStyle<any>> (
            styler: StyleRendererProtocol<EnvironmentStyleSettings>,
            style:  Partial<EnvironmentStyleSettings>,
        ) {

        // this is Pouya's Utah Teapot V3.3 :)

        //
        const lines = [
            '                      ▀█████▀                         ',
            '                    ▄▄▄▄███▄▄▄▄                       ',
            '              ▄█████████████████████▄            ▄▄▄▄▄',
            '  ▄▄▄▄████████████████████████████████▄        ▄███▀  ',
            '▐██▀▀▀▀▀▀▀▀█████████████████████████████      ████    ',
            '███       ███████████████████████████████   ▄████     ',
            ' ███     ███████████████████████████████████████      ',
            '  ▀██▄   ██████████████████████████████████████       ',
            '    ▀▀███████████████████████████████████████▀        ',
            '        ▀██████████████████████████████████▀          ',
            '          ▀█████████████████████████████▀             ',
            '            ▀▀███████████████████████▀▀               ',
        ]

        return new ShapeView( lines, 6, styler, style, true  )
    }

// ────────────────────────────────────────────────────────────────────────────────