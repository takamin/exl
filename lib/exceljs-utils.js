"use strict";

const Excel = require("exceljs");
function Utils() {}
Utils.readFile = async function(filename) {
    let workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filename);
    return workbook;
};
Utils.writeFile = async function(filename, workbook) {
    await workbook.xlsx.writeFile(filename);
};
module.exports = Utils;
