// Create class below

class Tamagotchi {
    constructor (name) {
        this.name = name
        this.energy = 9
        this.full = 8
        this.mood = 6
        this.sick = false
        this.rehomed = false
    }

    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }

    status(){
        console.log(`********************
My mood is:${this.mood}
I am this full:${this.full}
My energy is:${this.energy}
I am ${this.sick ? "" : "not"} sick
********************`)
    }

    eat(){
        this.full += 2
        this.energy -= 1
        if (this.full > 10) {
            this.sick = true
        }
    }

    medicate(){
        if (this.sick) {
            this.sick = false
            this.full = 9
            this.energy -= 3
        } else {
            this.energy -= 1
        }
    }

    play() {
        this.mood += 2
        this.energy -= 1
        this.full -= 1
        if (this.sick) {
            this.mood -= 1
            this.energy -= 1
        }
    }

    sleep() {
        this.energy += 4
        this.full -= 3
    }

    timePasses() {
        if (!this.sick) {
            this.mood -= 2
            this.full -= 1
            this.energy -= 1
        } else {
            this.mood -= 3
            this.full -= 2
            this.energy -= 2
        }
    }

    badGuardian() {
        console.log(`${this.name} has been rehomed.`)
        if (this.energy <= 0 || this.full <= 0 || this.mood <= 0) {
            this.rehomed = true
        }
    }
}

// Do not edit below this line
module.exports = Tamagotchi;
