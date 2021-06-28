
//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    import { describe }
        from "mocha"
    import { runStringToolsTestSuite }
        from "./string"
    import { runMonoTextJustificationTestSuite }
        from "../layouts/text-justification/mono"

//
// ─── TOOLS TEST SUITE ───────────────────────────────────────────────────────────
//

    export function runToolsTestSuite ( ) {
        describe ( "Tools", function ( ) {
            runStringToolsTestSuite( )
            runMonoTextJustificationTestSuite( )
        })
    }

// ────────────────────────────────────────────────────────────────────────────────
