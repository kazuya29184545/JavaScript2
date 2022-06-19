const { expect } = require("chai");
// import * as book from "../lib/book.js";

const getItem = (item) => {
    return {name : "red socks", year : 1970, genre : "comedy", director : "none"}
}

describe("test deep quality", () => {

    it("getItem returns correct movie", function() {
        let result = getItem("red socks")
        
        expect(result).to.deep.equal(
            {name : "red socks", year : 1970, genre : "comedy", director : "none"}
        );
    });

    // it("1 equals 2", function() {
    //     expect(2).to.equal(1);
    //     // var result = book.get("dune");
    //     // expect(result).to.deep.equal({title: "dune", author:"frank herbert", pubdate:1969});
    // });

});