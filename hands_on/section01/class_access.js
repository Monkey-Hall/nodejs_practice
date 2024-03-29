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

const fooInstance = new Foo(100)

// error
// fooInstance.#privateField

console.log( fooInstance.publicField )
console.log( fooInstance.filledInitializedInConstructor )

// error
// fooInstance.#computed

console.log( fooInstance.computed )

// error
// fooInstance.#computed = 10
fooInstance.computed = 10 
console.log( fooInstance.computed )
console.log( fooInstance.publicField )

// error
// fooInstance.#privateMethod()

console.log( fooInstance.publicMethod() )

// error
// fooInstance.#privateField

console.log( fooInstance.staticPublicField )

// error
// fooInstance.#staticPrivateMethod()

console.log( Foo.staticPublicMethod() )