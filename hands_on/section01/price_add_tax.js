const price = {
    value: 100,
    
    get withTax(){
        return Math.floor(this.value * 1.1)
    },

    set withTax(withTax){
        this.value = Math.ceil(withTax/1.1)
    }
}

console.log(price.withTax)
price.withTax = 333
console.log(price.withTax)
console.log(price.value)

console.log(Object.keys(price))
console.log(Object.values(price))