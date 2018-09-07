$('.nav_button').on('click', function(e) {
    e.preventDefault();
    $('nav').toggleClass('nav__hidden');
    $('article').toggleClass('article__full');
})

$('.header_button').on('click', function(a) {
    a.preventDefault();
    $('mobile__menu__hidden').toggleClass('mobile__menu__active');
})

function showDate() {
    let newDate = new Date;
    let year = newDate.getFullYear();
    let mounth = newDate.getMonth() + 1;
    let day = newDate.getDay() + 2;
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();

    let timerCootainer = document.createElement('div');

    let timerTime = document.createElement('div');
    let hourContainer = document.createElement('div');
    let minuteContainer = document.createElement('div');
    let secondContainer = document.createElement('div');

    let timerDate = document.createElement('div');
    let dayContainer = document.createElement('div');
    let mounthContainer = document.createElement('div');
    let yearContainer = document.createElement('div');

    timerTime.appendChild(hourContainer);
    timerTime.appendChild(minuteContainer);
    timerTime.appendChild(secondContainer);
    
    timerDate.appendChild(dayContainer);
    timerDate.appendChild(mounthContainer);
    timerDate.appendChild(yearContainer);

    timerCootainer.id = 'timerCootainer';

    timerCootainer.className = 'timer__container';
    timerTime.className = 'timer__container__item';
    timerDate.className = 'timer__container__item';
    
    hourContainer.innerHTML = `${hour}:`;
    minuteContainer.innerHTML = `${minute}:`;
    secondContainer.innerHTML = `${second}`;

    dayContainer.innerHTML = `${day}.`;
    mounthContainer.innerHTML = `${mounth}.`;
    yearContainer.innerHTML = `${year}`;

    let header = header__id;
    header.insertBefore(timerCootainer, header.lastChild);
    timerCootainer.appendChild(timerTime);
    timerCootainer.appendChild(timerDate);

    function changeData() {
        let newDate = new Date;
        let newYear = newDate.getFullYear();
        let newMounth = newDate.getMonth() + 1;
        let newDay = newDate.getDay() + 2;
        let newHour = newDate.getHours();
        let newMinute = newDate.getMinutes();
        let newSecond = newDate.getSeconds();

        if (newSecond != second) {
            second = newSecond;
            secondContainer.innerHTML = `${second}`;
        }
        if (newMinute != minute) {
            minute = newMinute;
            minuteContainer.innerHTML = `${minute}:`;
        }
        if (newHour != hour) {
            hour = newHour;
            hourContainer.innerHTML = `${hour}:`;
        }
        if (newDay != day) {
            day = newDay;
            dayContainer.innerHTML = `${day}.`;
        }
        if (newMounth != mounth) {
            mounth = newMounth;
            mounthContainer.innerHTML = `${mounth}.`;
        }
        if (newYear != year) {
            year = newYear;
            yearContainer.innerHTML = `${year}`;
        }
    }
    
    setInterval(changeData, 1000);
}

showDate();















//====================================================================================//


let formContainer = document.createElement('div');
formContainer.id = 'formContainer';
formContainer.className = 'form__container';

let ParentArticle = article;
ParentArticle.appendChild(formContainer);

let form = document.createElement('form');
form.className = 'form';
formContainer.appendChild(form);

let formInputRows = document.createElement('input');
let formInputColumns = document.createElement('input');
let formButton = document.createElement('input');

formInputRows.id = 'formInputRows';
formInputColumns.id = 'formInputColumns';
formButton.id = 'formButton';

formInputRows.className = 'form__input';
formInputColumns.className = 'form__input';
formButton.className = 'form__button';

formInputRows.placeholder = 'Rows';
formInputColumns.placeholder = 'Columns';
formButton.type = 'button';
formButton.value = 'Make ✏️';

form.appendChild(formInputRows);
form.appendChild(formInputColumns);
form.appendChild(formButton);

function createTable(rowsQuantity, columnsQuantity) {
    let tableContainer = document.createElement('div');
    tableContainer.className = 'table__container';
    let ParentArticle = article;
    ParentArticle.appendChild(tableContainer);

    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    
    for (i = 0; i < rowsQuantity; i++) {
        let tr = document.createElement('tr');
        tr.className = 'table__item';

        for (j = 0; j < columnsQuantity; j++) {
            let td = document.createElement('td');
            td.className = 'table__item';
            td.innerHTML = `${i + 1}, ${j + 1}`;
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }

    table.appendChild(tableBody);
    tableContainer.appendChild(table);
    table.className = 'table';

    return formButton.onclick = false;
}

function showError(message) {
    let errorContainer = document.createElement('div');
    errorContainer.className = 'error__container';
    errorContainer.innerHTML = `${message}`;
    let parentArticle = article;
    parentArticle.appendChild(errorContainer);
}

formButton.onclick = function() {
    let rowsQuantity = document.getElementById('formInputRows').value;
    let columnsQuantity = document.getElementById("formInputColumns").value;

    if (isNaN(+rowsQuantity) || isNaN(+columnsQuantity)) {
        showError('Something went wrong! Only numbers!');
        return false;
    } else if (rowsQuantity.length === 0 || columnsQuantity.length === 0) {
        showError('You write nothing!');
        return false;
    } else if (rowsQuantity < 1 || columnsQuantity < 1) {
        showError('Oops... Only numbers greater than 0!');
    } else {
        return createTable(rowsQuantity, columnsQuantity);
    }
};

//====================================================================================//

let footerContainer = document.createElement('div');
footerContainer.id = 'footer__container__id';
footerContainer.className = 'footer__container';
let footerParent = footer__id;
footerParent.appendChild(footerContainer);

// function resizing() {
//     let windowWidth = document.body.clientWidth;
//     let windowHeight = document.body.clientHeight;
//     footerContainer.innerHTML = `Width: ${windowWidth}px, Height: ${windowHeight}px`;
// }

// window.onresize = setTimeout(resizing(), 2000);

window.onresize = function() {
    let windowWidth = document.body.clientWidth;
    let windowHeight = document.body.clientHeight;
    footerContainer.innerHTML = `Width: ${windowWidth}px, Height: ${windowHeight}px`;
};