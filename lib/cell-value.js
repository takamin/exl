"use strict";
function CellValue(text, type) {
    this.type = type || "string";
    switch(this.type) {
        case "string":
            this.typedValue = text;
            break;
        case "number":
            this.typedValue = parseInt(text);
            break;
        default:
            throw new Error(`Unsupported type of value ${this.type}`);
    }
}
module.exports = CellValue;
