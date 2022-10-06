//reference type 
var object1 = { value: 10 }; 
var object2 = object1; 
var object3 = { value: 10 };

// context vs scope 
const object4 = {
    a: function() {
        console.log(this); 
    }
}

// instantiation 

class Player {
    constructor(name, type) {
        console.log(this)
        this.name = name;
        this.type = type; 
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player  {
    constructor(name, type) {
        super(name, type)
    }

    play() {
        console.log(`WEEEEE I'm a ${this.type}`); 
    }
}

const wizard1 = new Wizard('Shelly', 'Healer'); 
const wizard2 = new Wizard('Shawn', 'Dark Magic'); 

// Classical inheritance 
// how we use to do it back in the days before es6

var Player = function(name, type) {
    this.name = name; 
    this.type = type; 
}

Player.prototype.introduce  = function() {
    console.log(`Hi I am ${this.name}, I am a ${this.type}`); 
}

var wizard1 = new Player('Shelly', 'healer');
var wizard2 = new Player('Shawn', 'dark magic'); 

wizard1.play = function() {
    console.log(`WEEEEE I'M A ${this.type}`);
}

wizard2.play = function() {
    console.log(`WEEEEEEE I'm a ${this.type}`); 
}

