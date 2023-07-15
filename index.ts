//Tuple
let aa:[number, string];
aa = [10, "Hello"];

let bb: (string|number)[];
bb = ["Hello", 10]

let cc: any[];
cc = [19, true, "Hello"]

//INtersection Type
interface Person{
    name: string,
    age: number
}

interface Action{
    smile(): any;
    dance():any;
}

type Super = Person & Action;
function use(tool: Super){
    console.log("I can do anything");
    tool.name;
    tool.smile()
}

//Function: number, string
function sum(x:number, y:number):number{
    return x + y;
}
//console.log(sum(10, 10));

//enum const
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let bestDay: Day = Day.Monday;
//console.log(bestDay)

enum TenPlus  {
    Ten = 10,
    Eleven,
    Twelve
}

enum BLackPink{
    Lisa = "Lisa",
    Jisso = "Jisso",
    Jenie = "Jennie",
    Rose = "Rose"
}

let idol: BLackPink = BLackPink.Lisa;
//console.log(idol)

//class
class Car{
    public position: number = 10;
    private speed: number = 20;

    move(){
        this.position += this.speed;
    }
}

let car = new Car();
car.move()
//console.log(car.position)

class autoCar extends Car{
    movie(){
        super.move()
    }
}
