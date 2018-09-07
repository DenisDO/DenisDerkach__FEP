function applyAll(funk, start) {
    var args = [];
    for (var i = 2; i < arguments.length; i++) {
        args[i] = arguments[i];
    }

    if (funk === add.name) {
        add(args, start);
    } else {
        if (funk === sup.name) {
            sup(args, start);
        } else {
            if (funk === mul.name) {
                mul(args, start);
            } else {
                if (funk === div.name) {
                    div(args, start);
                } else {
                    return console.log(`No function ${funk}`);
                }
            }
        }
    }

    function add(args, start) {
        let result = start;
        for (let i = 2; i < args.length; i++) {
            result = result + args[i];
        }
        return console.log(`${result}`);
    }

    function sup(args, start) {
        let result = start;
        for (let i = 2; i < args.length; i++) {
            result = result - args[i];
        }
        return console.log(`${result}`);
    }

    function mul(args, start) {
        let result = start;
        for (let i = 2; i < args.length; i++) {
            result = result * args[i];
        }
        return console.log(`${result}`);
    }

    function div(args, start) {
        let result = start;
        for (let i = 2; i < args.length; i++) {
            result = result / args[i];
        }
        return console.log(`${result}`);
    }
}

let start = 448;

applyAll("add", start, 2, -400, 10);
applyAll("sup", start, 2, 2, 19);
applyAll("mul", start, 2, 2, 0);
applyAll("div", start, 4, 2, 2);