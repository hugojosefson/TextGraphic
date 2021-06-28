
//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    import { describe }
        from "mocha"

    import { runToolsTestSuite }
        from "./tools/main"
    import { runCoreElementsTestSuite }
        from "./core-elements/main"
    import { runLayoutsTestSuite }
        from "./layouts/main"

//
// ─── TEXT KIT TEST SUITE ────────────────────────────────────────────────────────
//

    describe ( "TextKit Framework", function () {
        runToolsTestSuite( )
        runCoreElementsTestSuite( )
        runLayoutsTestSuite( )
    })

// ────────────────────────────────────────────────────────────────────────────────
