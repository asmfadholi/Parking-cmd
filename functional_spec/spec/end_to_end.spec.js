const executeData = require('../../bin/parking_lot');
const Table = require('cli-table');

const sinon = require('sinon');
const assert = require('assert');

const dataStatus = [
    [1, 'KA-01-HH-1234', 'White'],
    [2, 'KA-01-HH-9999', 'White'],
    [3, 'KA-01-BB-0001', 'Black'],
    [5, 'KA-01-HH-2701', 'Blue'],
    [6, 'KA-01-HH-3141', 'Black']
]

const table = new Table({
    head: ['Slot no.', 'Registration no.', 'Colour'],
    colWidths: [20, 40, 30]
});
table.push(
    ...dataStatus
);


const test_array = [
    "create_parking_lot 6",
    "park KA-01-HH-1234 White",
    "park KA-01-HH-9999 White",
    "park KA-01-BB-0001 Black",
    "park KA-01-HH-7777 Red",
    "park KA-01-HH-2701 Blue",
    "park KA-01-HH-3141 Black",
    "leave 4",
    "status",
    "park KA-01-P-333 White",
    "park DL-12-AA-9999 White",
    "registration_numbers_for_cars_with_colour White",
    "slot_numbers_for_cars_with_colour White",
    "slot_number_for_registration_number KA-01-HH-3141",
    "slot_number_for_registration_number MH-04-AY-1111"
];


const against = [
    "Created a parking lot with 6 slots",
    "Allocated slot number: 1",
    "Allocated slot number: 2",
    "Allocated slot number: 3",
    "Allocated slot number: 4",
    "Allocated slot number: 5",
    "Allocated slot number: 6",
    "Slot number 4 is free",
    table.toString(),
    "Allocated slot number: 4",
    "Sorry, parking lot is full",
    "KA-01-HH-1234, KA-01-HH-9999, KA-01-P-333",
    "1, 2, 4",
    "6",
    "Not found"
];

describe('End to end test', function() {
    test_array.forEach((data, index) => {
        it('Test case' + (index + 1), () => {
            let spy = sinon.spy(console, 'log');

            // call the function that needs to be tested
            executeData(data);

            // assert that it was called with the correct value
            assert(spy.calledWith(against[index]));

            // restore the original function
            spy.restore();
        });
    })
});