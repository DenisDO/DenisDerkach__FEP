function call(i) {
    setTimeout(function() {
        console.log(i);
    }, 10)
}

for(var i = 1; i <= 10; i++) {
    call(i);
}

for(var i = 1; i <= 10; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, 10)
    })(i);
}


let maths = {
    result: 0,
    start: function(a) {
        this.result = a;
        return this;
    },

    minus: function(a) {
        this.result = this.result - a;
        return this;
    },

    plus: function(a) {
        this.result = this.result + a;
        return this;
    },

    multiply: function(a) {
        this.result = this.result * a;
        return this;
    },

    division: function(a) {
        this.result = this.result / a;
        return this;
    },

    showResult: function() {
        console.log(this.result);
        return this;
    }
}

setTimeout(function() {
    maths.start(5).plus(5).minus(0).multiply(2).plus(4).division(4).showResult();
}, 1000);