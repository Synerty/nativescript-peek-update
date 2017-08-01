var PeekUpdate = require("nativescript-peek-update").PeekUpdate;
var peekUpdate = new PeekUpdate();

describe("greet function", function() {
    it("exists", function() {
        expect(peekUpdate.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(peekUpdate.greet()).toEqual("Hello, NS");
    });
});