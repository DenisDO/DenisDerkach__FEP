let notesInSafe = {
    25: 0,
    50: 0,
    100: 0
};

let ticketPrice = 25;

// let buyers = [100, 50, 25, 25, 25, 25, 100, 25, 100];
let buyers = [25, 25, 50, 100, 25, 50, 50];

function selling(notesInSafe, ticketPrice, buyers) {
    for (i = 0; i < buyers.length; i++) {
        let note = buyers[i];

        if (note === ticketPrice) {
            notesInSafe[25] = ++notesInSafe[25];
            console.log("Ticket is sold!");
        }

        if (note === 50) {
            if (notesInSafe[25] >= 1) {
                notesInSafe[25] = --notesInSafe[25];
                notesInSafe[50] = ++notesInSafe[50];
                console.log("Ticket is sold!");
            }
            else {
                console.log("Ticket cannot be sold!");
            }
        }

        if (note === 100) {
            if (notesInSafe[25] >= 1 && notesInSafe[50] >= 1) {
                notesInSafe[25] = --notesInSafe[25];
                notesInSafe[50] = --notesInSafe[50];
                notesInSafe[100] = ++notesInSafe[100];
                console.log("Ticket is sold!");
            }
            else if (notesInSafe[25] >= 3) {
                notesInSafe[25] = notesInSafe[25] - 3;
            } else {
                console.log("Ticket cannot be sold!");
            }
        }
    }
}

selling(notesInSafe, ticketPrice, buyers);