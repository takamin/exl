#!/usr/bin/env node
"use strict";
const Address = require("../lib/address.js");
const CellValue = require("../lib/cell-value.js");
const ExcelUtils = require("../lib/exceljs-utils.js");
async function main(argv) {
    try {
        switch(argv.length) {
            case 1:
                await printCell(new Address(argv[0]));
                break;
            case 2:
                await assignCell(new Address(argv[0]),
                    new CellValue(argv[1]));
                break;
            case 3:
                await assignCell(new Address(argv[0]),
                    new CellValue(argv[1], argv[2]));
                break;
            default:
                usage();
                process.exit(1);
        }
    } catch(err) {
        console.error(`${err.name}: ${err.message}`);
        process.exit(1);
    }
}
async function printCell(addr) {
    let workbook = await ExcelUtils.readFile(addr.filename);
    let sheet = workbook.getWorksheet(addr.sheetName);
    let cell = sheet.getCell(addr.address);
    console.log(cell.value);
}
async function assignCell(addr, value) {
    let workbook = await ExcelUtils.readFile(addr.filename);
    let sheet = workbook.getWorksheet(addr.sheetName);
    let cell = sheet.getCell(addr.address);
    cell.value = value.typedValue;
    await ExcelUtils.writeFile(addr.filename, workbook);
}
function usage() {
    console.error(
`Usage: exl <operating-address> [<new-value> [value-type]]

# To echo a value at a cell:
$ exl [foo.xlsx]Sheet1!A1

# To set a string to a cell:
$ exl [foo.xlsx]Sheet1!A1 'Hello Excel'

# To set a number:
$ exl [foo.xlsx]Sheet1!A1 '1234' number`
);
}

main(process.argv.slice(2));
