const CODES = {
    A: 65,
    Z: 90
}

function toCell(content) {
    return `<div class="cell" contenteditable="">${content}</div>`
}

function toColumn(col) {
    return `<div class="column">${col}</div>`
}

function createRow(content, index) {
    return `
    <div class="row">
        <div class="row-info">${index ? index : ''}</div>
        <div class="row-data">${content}</div>
    </div>`
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 20) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    console.log(colsCount)

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(cols, null))

    for (let i = 0; i < rowsCount; i++) {
        const cell = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')
        rows.push(createRow(cell, i + 1))
    }
    return rows.join('')
}
