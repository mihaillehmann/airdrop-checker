import { entryPoint } from "./utils/common.js"
import { odosAirdropChecker } from "./checkers/odos.js"
import { zoraOpAirdropChecker } from "./checkers/zora-op.js"

async function startMenu(menu) {
    let startOver = true
    if (menu === undefined) {
        mode = await entryPoint()
    } else {
        startOver = false
    }

    switch (mode) {
        case "odos":
            odosAirdropChecker()
            break
        case "zoraop":
            zoraOpAirdropChecker()
            break
    }
}

const args = process.argv.slice(2)
let mode = args[0]

await startMenu(mode)
