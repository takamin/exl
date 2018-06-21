"use strict";
function Address(addrspec) {
    let m = /^(\[[^\]]+\]|)([^\[\]!]+)!([^\[\]]+)$/.exec(addrspec);
    if(m == null) {
        throw new Error(`Invalid address ${addrspec}`);
    }
    this.filename = m[1].replace(/^(\[|)([^\]]+)(\]|)$/,"$2");
    this.sheetName = m[2];
    this.address = m[3];
}
module.exports = Address;
