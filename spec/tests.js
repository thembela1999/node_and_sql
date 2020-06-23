const {
    addNewVisitor,
    listAllVisits,
    deleteVisit,
    updateVisit,
    veiwVisit,
    emptyVisits
} = require("../src/app");




describe("node sql addNewVisitor", function() {
    it("save data to the database", async function(done) {

        objDetails = await addNewVisitor("Thembela", 21, "05/01/2020", "09:00", "amanda", "excellent");
        expect(visitor_name).toBe("thembela");
        expect(visitor_age).toEqual(21);
        expect(date_of_visit).toEqual(05 / 01 / 2020);
        expect(time_of_visit).toEqual("09:00");
        expect(assistant).toEqual("amanda");
        expect(comments).toEqual("excellent");

        done();

    });
});

describe("node sql listAllVisits", function() {
    it("should be able to list all visitors", async function(done) {

        let list = await listAllVisits();

        expect(visitor_name).toBe("thembela");
        expect(visitor_age).toEqual(21);
        expect(date_of_visit).toEqual(05 / 01 / 2020);
        expect(time_of_visit).toEqual("09:00");
        expect(assistant).toEqual("amanda");
        expect(comments).toEqual("excellent");

        done();

    });
});

describe("node sql deleteVisit,", function() {
    it("should be able to delete a visitor", async function(done) {

        let deleted = await deleteVisit();

    });
});

describe("node sql updateVisit,", function() {
    it("should be able to update a visitor's details", async function(done) {

        let update = await updateVisit();
        expect(visitor_name).toBe("thembela");
        expect(visitor_age).toEqual(21);
        expect(date_of_visit).toEqual(05 / 01 / 2020);
        expect(time_of_visit).toEqual("09:00");
        expect(assistant).toEqual("amanda");
        expect(comments).toEqual("excellent");



    });
});

describe("node sql veiwVisit,", function() {
    it("should be able to view a visitor", async function(done) {
        let view = await veiwVisit();

        expect(visitor_name).toBe("thembela");
        expect(visitor_age).toEqual(21);
        expect(date_of_visit).toEqual(05 / 01 / 2020);
        expect(time_of_visit).toEqual("09:00");
        expect(assistant).toEqual("amanda");
        expect(comments).toEqual("excellent");


    });
});

describe("node sql emptyVisits,", function() {
    it("should be able to delete all visitors", async function(done) {

        expect(await emptyVisits()).not.toBeNull();
        done();
    });
});