
import { SpacedBox } from "./renderkit/spaced-box"
import * as Presets from "./renderkit/shapes/box-frames"
import { createTable } from "./renderkit/shapes/table"

// SpacedBox Join Test

const b1 = new SpacedBox( [ '1', '2', '-', '4' ], 2 )
const b2 = new SpacedBox( [ '1', '-', '3', '4', '5' ], 1 )
const b3 = new SpacedBox( [ '1', '-' ], 1 )
const b4 = new SpacedBox( [ '-', '2' ], 0 )
const b5 = new SpacedBox( [ '-', '2', '3' ], 0 )

const box = SpacedBox.concatHorizontally(
    [ b1, b2, b3, b4, b5 ], SpacedBox.initWithText( " + ", 0 )
)

const frame1 =
    box .applyMargin( 0, 4, 0, 4 )
        .frame( Presets.CornersPreset )
        .applyMargin( 1, 3, 1, 3 )
        .frame( Presets.LightBoxPreset )
        .applyMargin( 1, 0, 1, 5 )

const tableText = [
    [ "Name", "Pouya Kary" ],
    [ "Occupation", "█████████████ █████████" ]

]

const tableCells =
    tableText.map( row =>
        row.map( cell =>
            SpacedBox.initWithText( " " + cell + " ", 0 )
        )
    )

const table = createTable( tableCells )

console.log( table.plainTextForm )