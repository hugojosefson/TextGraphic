
//
// Copyright (c) 2021 - present by Pouya Kary <pouya@kary.us>
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//


//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    import * as TextKit
        from "."

//
// ─── ASSIGN ─────────────────────────────────────────────────────────────────────
//

    if ( window ) {
        window.onload = ( ) => {
            ( window as any ).TextKit = TextKit
        }
    }

// ────────────────────────────────────────────────────────────────────────────────