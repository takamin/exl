"use strict";
const assert = require("chai").assert;
const Address = require("../lib/address.js");
describe("Address", () => {
    describe("c'tor", () => {
        describe("for valid format of address", () => {
            it("should recognize a filename", () => {
                let addr = new Address("[filename.xlsx]Sheet1!A1");
                assert.equal(addr.filename, "filename.xlsx");
            });
            it("should recognize that a filename is empty, when it's omitted", () => {
                let addr = new Address("Sheet1!A1");
                assert.equal(addr.filename, "");
            });
            it("should recognize a sheet name", () => {
                let addr = new Address("[filename.xlsx]Sheet1!A1");
                assert.equal(addr.sheetName, "Sheet1");
            });
            it("should recognize a sheet name, even if a filename is omitted", () => {
                let addr = new Address("Sheet1!A1");
                assert.equal(addr.sheetName, "Sheet1");
            });
            it("should recognize a address", () => {
                let addr = new Address("[filename.xlsx]Sheet1!A1");
                assert.equal(addr.address, "A1");
            });
            it("should recognize a address, even if a filename is omitted", () => {
                let addr = new Address("Sheet1!A1");
                assert.equal(addr.address, "A1");
            });
        });

        describe("for invalid format of address", () => {
            it("should throw error when a filename is empty", () => {
                assert.throws(()=>{
                    let addr = new Address("[]!A1");
                    console.log("filename:", addr.filename);
                    console.log("sheetName:", addr.sheetName);
                    console.log("address:", addr.address);
                },/Invalid address/);
            });
            it("should throw error when a sheet name is empty", () => {
                assert.throws(()=>{
                    let addr = new Address("[filename.xlsx]!A1");
                    console.log("filename:", addr.filename);
                    console.log("sheetName:", addr.sheetName);
                    console.log("address:", addr.address);
                },/Invalid address/);
            });
            it("should throw error when an address is empty", () => {
                assert.throws(()=>{
                    let addr = new Address("[filename.xlsx]Sheet1!");
                    console.log("filename:", addr.filename);
                    console.log("sheetName:", addr.sheetName);
                    console.log("address:", addr.address);
                },/Invalid address/);
            });
            it("should throw error without a exclamation mark", () => {
                assert.throws(()=>{
                    let addr = new Address("[filename.xlsx]A1");
                    console.log("filename:", addr.filename);
                    console.log("sheetName:", addr.sheetName);
                    console.log("address:", addr.address);
                },/Invalid address/);
            });
            it("should throw error without both of a sheet name and an address", () => {
                assert.throws(()=>{
                    let addr = new Address("[filename.xlsx]");
                    console.log("filename:", addr.filename);
                    console.log("sheetName:", addr.sheetName);
                    console.log("address:", addr.address);
                },/Invalid address/);
            });

            it("should throw error when a sheet name is empty, when the filename is ommited", () => {
                assert.throws(()=>{
                    let addr = new Address("!A1");
                    console.log("filename:", addr.filename);
                    console.log("sheetName:", addr.sheetName);
                    console.log("address:", addr.address);
                },/Invalid address/);
            });
            it("should throw error when an address is empty, when the filename is ommited", () => {
                assert.throws(()=>{
                    let addr = new Address("Sheet1!");
                    console.log("filename:", addr.filename);
                    console.log("sheetName:", addr.sheetName);
                    console.log("address:", addr.address);
                },/Invalid address/);
            });
            it("should throw error without a exclamation mark, when the filename is ommited", () => {
                assert.throws(()=>{
                    let addr = new Address("A1");
                    console.log("filename:", addr.filename);
                    console.log("sheetName:", addr.sheetName);
                    console.log("address:", addr.address);
                },/Invalid address/);
            });
            it("should throw error for empty string", () => {
                assert.throws(()=>{
                    let addr = new Address("");
                    console.log("filename:", addr.filename);
                    console.log("sheetName:", addr.sheetName);
                    console.log("address:", addr.address);
                },/Invalid address/);
            });
        });
    });
});
