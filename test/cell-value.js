"use strict";
const assert = require("chai").assert;
const CellValue = require("../lib/cell-value.js");
describe("CellValue", () => {
    describe("c'tor", () => {
        it("should be initialized as a string", () => {
            let cellValue = new CellValue("1", "string");
            assert(cellValue.typedValue, "1");
        });
        it("should be initialized as a number", () => {
            let cellValue = new CellValue("1", "number");
            assert(cellValue.typedValue, 1);
        });
        it("should be initialized as a string when the type is omitted", () => {
            let cellValue = new CellValue("1");
            assert(cellValue.typedValue, "1");
        });
        it("should throw error for the type bool", () => {
            assert.throws( () => {
                let cellValue = new CellValue("true", "bool");
            },/Unsupported/);
        });
        it("should throw error for the type boolean", () => {
            assert.throws( () => {
                let cellValue = new CellValue("true", "boolean");
            },/Unsupported/);
        });
        it("should throw error for the type date", () => {
            assert.throws( () => {
                let cellValue = new CellValue("2018-06-21", "date");
            },/Unsupported/);
        });
    });
});

