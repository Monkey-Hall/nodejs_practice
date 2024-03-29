class Foo{
    #privateField = 1

    publicField = 2

    static #staticPtivateField = 3

    staticPublicField = 4

    constructor(paramater){
        this.filledInitializedInConstructor = paramater
        console.log('Foo constructor')
    }

    get #computed(){
        return this.publicField *2
    }

    get computed(){
        return this.#computed
    }

    set #computed(value){
        return this.publicField = value/2
    }

    set computed(value){
        return this.#computed = value
    }

    #privateMethod(){
        return this.#privateField
    }

    publicMethod(){
        return this.#privateField
    }

    static #staticPrivateMethod(){
        return this.#staticPtivateField
    }

    static staticPublicMethod(){
        return this.#staticPtivateField
    }

}

class Bar extends Foo{
    constructor(paramater){
        super(paramater)
        this.subClassPublicField = 100
        console.log('Bar constructor')
    }

    publicMethod(){
        return super.publicMethod() * this.subClassPublicField
    }
}


const barInstance = new Bar(99)
console.log(barInstance.publicField)
console.log(barInstance.filledInitializedInConstructor)
console.log(barInstance.subClassPublicField)
console.log(barInstance.publicMethod())
console.log(barInstance.staticPublicField)

// error
// Bar.staticPublicMethod()


// prototype tune
console.log()

const fooInstance = new Foo(100)

console.log( Foo.prototype )
console.log( Object.getOwnPropertyNames(Foo.prototype) )
console.log( Foo.prototype.publicMethod )
console.log( fooInstance.__proto__ === Foo.prototype )

console.log( fooInstance instanceof Foo )
const plainObject = {}
console.log(plainObject instanceof Foo)
plainObject.__proto__ = Foo.prototype
console.log( plainObject instanceof Foo )

console.log()

console.log(barInstance instanceof Foo)
console.log(barInstance.__proto__ === Bar.prototype)
console.log(Object.getOwnPropertyNames(Bar.prototype))
console.log(barInstance.__proto__ === Foo.prototype)
console.log()

console.log(barInstance.__proto__.__proto__ === Foo.prototype)
console.log(fooInstance.__proto__.__proto__ === Object.prototype)
console.log(fooInstance instanceof Object)
console.log(barInstance instanceof Object)