var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Tuple
var aa;
aa = [10, "Hello"];
var bb;
bb = ["Hello", 10];
var cc;
cc = [19, true, "Hello"];
function use(tool) {
    console.log("I can do anything");
    tool.name;
    tool.smile();
}
//Function: number, string
function sum(x, y) {
    return x + y;
}
//console.log(sum(10, 10));
//enum const
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
var bestDay = Day.Monday;
//console.log(bestDay)
var TenPlus;
(function (TenPlus) {
    TenPlus[TenPlus["Ten"] = 10] = "Ten";
    TenPlus[TenPlus["Eleven"] = 11] = "Eleven";
    TenPlus[TenPlus["Twelve"] = 12] = "Twelve";
})(TenPlus || (TenPlus = {}));
var BLackPink;
(function (BLackPink) {
    BLackPink["Lisa"] = "Lisa";
    BLackPink["Jisso"] = "Jisso";
    BLackPink["Jenie"] = "Jennie";
    BLackPink["Rose"] = "Rose";
})(BLackPink || (BLackPink = {}));
var idol = BLackPink.Lisa;
//console.log(idol)
//class
var Car = /** @class */ (function () {
    function Car() {
        this.position = 10;
        this.speed = 20;
    }
    Car.prototype.move = function () {
        this.position += this.speed;
    };
    return Car;
}());
var car = new Car();
car.move();
//console.log(car.position)
var autoCar = /** @class */ (function (_super) {
    __extends(autoCar, _super);
    function autoCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    autoCar.prototype.movie = function () {
        _super.prototype.move.call(this);
    };
    return autoCar;
}(Car));
