export class Cat {

    constructor(name = 'Simon') {
        this.name = name
    }

    meow() {
        return 'MROW'
    }

    destroyTheHouse() {
        return window['Object'] = undefined
    }

    eat() {
        return 'nom nom nom'
    }

    sleep(callback) {
        setTimeout(callback, 1000)
    }
}