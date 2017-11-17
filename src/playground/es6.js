
class Person {
    constructor(name='Anon',age=0) {
        this.name = name ;
        this.age = age;
    }
    getGreeting(){
       return `welcome ${this.name}`;
    }
    getDescription(){
        return `you are of ${this.age} years....`;
    }
}

class Student extends Person {
    constructor(name,age,major) {
        super(name,age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let desc = super.getDescription();

        if(this.hasMajor()) {
            desc = desc + `and the major is ${this.major}.`
        }
        return desc;
    }

}

class Traveler extends Person{
    constructor(name,age,home) {
        super(name.age);
        this.home = home || 'fuck-OFF';
    }
    
}


const me = new Student('Sushant Shekhar',20,'cse');
console.log(me.getDescription());


//  const other = new Person();
//  console.log(other.getGreeting());