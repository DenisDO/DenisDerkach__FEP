let studentsArray = [
    {name: "Ivan",
     start: 2000,
     end: 2005}
,
     {name: "Petro",
     start: 2002,
     end: 2006}
,
     {name: "Tantyana",
     start: 2000,
     end: 2003}
,
     {name: "Mikhail",
     start: 2001,
     end: 2006}
,
     {name: "Vasily",
     start: 2001,
     end: 2006}
,
     {name: "Olga",
     start: 2000,
     end: 2005}
,
     {name: "Masha",
     start: 2005,
     end: 2005}
,
     {name: "Jenya",
     start: 2002,
     end: 2006}
,
     {name: "Katya",
     start: 2001,
     end: 2006}
];

let studentsArrayWithDate = [];
let maxArrayWithDate = [];

let startDate = `1990`;
let endDate = `2006`;

let stardDateMax = `18965`;
let endDateMax = `2018`;

function isDate(year) {
    let yearArr = year.split('');
    if (+year === false || yearArr.length != 4) {
        console.log(`There is mistake in ${year}. Format: YYYY.`);
        return false;
    } else return true;
}

function isDates(startYear, endYear) {
    if (startYear >= endYear) {
        console.log(`The start date ${startYear} cannot be more than end date ${endYear}`);
        return false;
    } else return true;
}

function getStudensWithDate(stardDate, endDate) {
    for (let i = 0; i < studentsArray.length; i++) {
        if (studentsArray[i].start >= stardDate && studentsArray[i].end <= endDate) {
            studentsArrayWithDate[i] = studentsArray[i];
        } else {
            continue;
        }
    }
    return studentsArrayWithDate = studentsArrayWithDate.filter(el => el !== null)
}

function showStudensWithDate() {
    if (studentsArrayWithDate.length >= 1) {
        console.log(`Studied in ${startDate} - ${endDate}:`);
        for (let i = 0; i < studentsArrayWithDate.length; i++) {
            console.log(`${studentsArrayWithDate[i].name}`);
        }
    } else {
        console.log(`Nobody studied in ${startDate} - ${endDate}`);
    }
}

function setMaxStudensWithDate(stardDateMax, endDateMax) {
    for (let i = stardDateMax; i <= endDateMax; i++) {
        let current = i;
        let quantity = 0;
        for (let n = 0; n < studentsArray.length; n++) {
            if (studentsArray[n].start === current || studentsArray[n].end === current) {
                maxArrayWithDate.push({
                    year: current,
                    quant: ++quantity
                })
                } else {
                    continue;
                }
        }
    }
}

function findMaxYear(maxArrayWithDate) {
    let maxArrayLength = maxArrayWithDate.length;
    let counter = 0;
    for (let i = 0; i < maxArrayLength; i++) {
        if (maxArrayWithDate[i].quant > counter) {
            counter = maxArrayWithDate[i].quant;
        } else {
            continue;
        }
    }

    if (counter > 0) {
        showMaxStudensWithDate(counter, maxArrayLength);
    } else {
        console.log(`No students in the data base!`)
    }
}

function showMaxStudensWithDate(counter, maxArrayLength) {
    for (let i = 0; i < maxArrayLength; i++) {
        if (maxArrayWithDate[i].quant === counter) {
            console.log(`Year: ${maxArrayWithDate[i].year}, Quantity: ${counter} `);
        } else continue;
    }
}


if (isDate(startDate) === true && isDate(endDate) === true) {
    if (isDates(startDate, endDate) === true) {
        getStudensWithDate(startDate, endDate);
        showStudensWithDate(startDate, endDate);
    }
}

if (isDate(stardDateMax) === true && isDate(endDateMax) === true) {
    if (isDates(stardDateMax, endDateMax) === true) {
        setMaxStudensWithDate(stardDateMax, endDateMax);
        findMaxYear(maxArrayWithDate);
    }
}