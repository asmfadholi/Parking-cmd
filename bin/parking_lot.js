#!/usr/bin/env node

const readline = require('readline');
const Table = require('cli-table');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(cmd) {
    const spliData = cmd.split(' ');
    if (spliData.length === 1) {
        checkSingleArgument(spliData[0])
    } else {
        console.log('The command more than 1 arguments ' + spliData);
    }
});

function tableHelp() {
    const dataHelp = [
        ['create_parking_lot $total', 'for creating total of area park'],
        ['park $plat-number $color', 'for parking new vehicle'],
        ['leave $number', 'for leaveing vehicle to the park'],
        ['registration_numbers_for_cars_with_colour $color', 'for checking registration number of car based on color'],
        ['slot_numbers_for_cars_with_colour $color', 'for checking list slot number of cars in the park using color'],
        ['slot_number_for_registration_number $plat-number ', 'for checking number slot of cars in the park using plat-number'],
        ['help', 'for showing list of command provided'],
        ['status', 'for checking current slot of park'],
        ['exit', 'for exit the program'],
    ]
    const table = new Table({
        head: ['Command', 'Description'],
        colWidths: [60, 80]
    });
    table.push(
        ...dataHelp
    );
    console.log(table.toString());
}

function tableStatus() {
    const dataStatus = [
        ['1', 'BB-66-77-II', 'Red'],
    ]
    const table = new Table({
        head: ['Slot no.', 'Registration no.', 'Colour'],
        colWidths: [20, 40, 30]
    });
    table.push(
        ...dataStatus
    );
    console.log(table.toString());
}

function checkSingleArgument(data) {

    switch (data) {
        case 'status':
            tableStatus();
            break;
        case 'help':
            tableHelp();
            break;
        case 'exit':
            console.log('Goodbye...!');
            rl.close();
            break;
        default:
            console.log('Command is not found please check list command using "help"');
    }
}