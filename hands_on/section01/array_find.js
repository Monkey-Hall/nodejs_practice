const arr = ['bar', 'baz', 'foo', 'a', 'b', 'c']

arr.find(e => {
    console.log(e)
    return e.endsWith('z')
})