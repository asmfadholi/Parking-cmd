const executeData = require('../../bin/parking_lot');
const Table = require('cli-table');

const sinon = require('sinon');
const assert = require('assert');

describe('Interactive Test', function() {
    it('Create Parking lot', () => {
        // "spy" on `console.log()`
        let spy = sinon.spy(console, 'log');

        // call the function that needs to be tested
        executeData('create_parking_lot 3');

        // assert that it was called with the correct value
        assert(spy.calledWith('Created a parking lot with 3 slots'));

        // restore the original function
        spy.restore();
    });

    it('Parking a car 1', () => {
        // "spy" on `console.log()`
        let spy = sinon.spy(console, 'log');

        // call the function that needs to be tested
        executeData('park KA-01-HH-1234 White');

        // assert that it was called with the correct value
        assert(spy.calledWith('Allocated slot number: 1'));

        // restore the original function
        spy.restore();
    });

    it('Parking a car 2', () => {
        // "spy" on `console.log()`
        let spy = sinon.spy(console, 'log');

        // call the function that needs to be tested
        executeData('park KA-01-BB-0001 Black');

        // assert that it was called with the correct value
        assert(spy.calledWith('Allocated slot number: 2'));

        // restore the original function
        spy.restore();
    });

    it('Parking a car 3', () => {
        // "spy" on `console.log()`
        let spy = sinon.spy(console, 'log');

        // call the function that needs to be tested
        executeData('park KA-01-HH-7777 Red');

        // assert that it was called with the correct value
        assert(spy.calledWith('Allocated slot number: 3'));

        // restore the original function
        spy.restore();
    });

    it('Parking is full', () => {
        // "spy" on `console.log()`
        let spy = sinon.spy(console, 'log');

        // call the function that needs to be tested
        executeData('park KA-01-HH-7477 Blue');

        // assert that it was called with the correct value
        assert(spy.calledWith('Sorry, parking lot is full'));

        // restore the original function
        spy.restore();
    });

    it('Leave slot 3', () => {
        // "spy" on `console.log()`
        let spy = sinon.spy(console, 'log');

        // call the function that needs to be tested
        executeData('leave 3');

        // assert that it was called with the correct value
        assert(spy.calledWith('Slot number 3 is free'));

        // restore the original function
        spy.restore();
    });

    it('Check status', () => {
        // "spy" on `console.log()`
        let spy = sinon.spy(console, 'log');

        // call the function that needs to be tested
        executeData('status');

        const dataStatus = [
            [1, 'KA-01-HH-1234', 'White'],
            [2, 'KA-01-BB-0001', 'Black']
        ]

        const table = new Table({
            head: ['Slot no.', 'Registration no.', 'Colour'],
            colWidths: [20, 40, 30]
        });
        table.push(
            ...dataStatus
        );

        // assert that it was called with the correct value
        assert(spy.calledWith(table.toString()));

        // restore the original function
        spy.restore();
    });

    it('Check registration number with colour', () => {
        // "spy" on `console.log()`
        let spy = sinon.spy(console, 'log');

        // call the function that needs to be tested
        executeData('registration_numbers_for_cars_with_colour White');

        // assert that it was called with the correct value
        assert(spy.calledWith('KA-01-HH-1234'));

        // restore the original function
        spy.restore();
    });

    it('Check slot number with colour', () => {
        // "spy" on `console.log()`
        let spy = sinon.spy(console, 'log');

        // call the function that needs to be tested
        executeData('slot_numbers_for_cars_with_colour Black');

        // assert that it was called with the correct value
        assert(spy.calledWith('2'));

        // restore the original function
        spy.restore();
    });

    it('Check slot number with registration number', () => {
        // "spy" on `console.log()`
        let spy = sinon.spy(console, 'log');

        // call the function that needs to be tested
        executeData('slot_number_for_registration_number KA-01-HH-1234');

        // assert that it was called with the correct value
        assert(spy.calledWith('1'));

        // restore the original function
        spy.restore();
    });

    it('Check slot number with registration number is not found', () => {
        // "spy" on `console.log()`
        let spy = sinon.spy(console, 'log');

        // call the function that needs to be tested
        executeData('slot_number_for_registration_number KA-01-HH-124345');

        // assert that it was called with the correct value
        assert(spy.calledWith('Not found'));

        // restore the original function
        spy.restore();
    });

    it('Reset program parking lot', () => {
        // "spy" on `console.log()`
        let spy = sinon.spy(console, 'log');

        // call the function that needs to be tested
        executeData('reset');

        // assert that it was called with the correct value
        assert(spy.calledWith('Your parking lot reseted successfully'));

        // restore the original function
        spy.restore();
    });
});