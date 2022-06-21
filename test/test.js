const { expect } = require("chai");
const {getItem, addItem, deleteItem} = require("../data.js");

describe('test deep equality', () => {

    // getItem
    it('getItem returns correct movie', () => {
        let result = getItem("red socks");
        expect(result).to.deep.equal(
            {name : "red socks", year : 1970, genre : "comedy", director : "none"}
        );
    });
    it('getItem fails with incorrect movie', () => {
        let result = getItem("blue socks");
        expect(result).to.be.undefined;
    });

    // addItem
    it('addItem returns correct movie', () => {
        let result = addItem({name : "intersteller", year : 2018, genre : "Si-fi", director : "nolan"});
        expect(result).to.deep.equal(
            [
                {name : "red socks", year : 1970, genre : "comedy", director : "none"},
                {name : "star shoot", year : 1980, genre : "love", director : "none"},
                {name : "last chrismas", year : 1990, genre : "love", director : "John"},
                {name : "inception", year : 2000, genre : "sci-fi", director : "nolan"},
                {name : "your name", year : 2010, genre : "anime", director : "makoto"},
                {name : "intersteller", year : 2018, genre : "Si-fi", director : "nolan"}
            ]
        );
    });
    it('addItem fails with incorrect movie', () => {
        let result = addItem({name : "aaaaaaaa", year : 2018, genre : "Si-fi", director : "nolan"});
        expect(result).to.be.undefined;
    });

    // deleteItem
    it('deleteItem returns correct movie', () => {
        let result = deleteItem("your name");
        expect(result).to.deep.equal(
            {deleted: true, total: 5 }
        );
    });
    it('deleteItem fails with incorrect movie', () => {
        let result = deleteItem("your hair");
        expect(result).to.be.undefined;
    });
});