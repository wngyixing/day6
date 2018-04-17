function Define(fn) {
    if (fn) {
        return fn()
    } else {
        return "error"
    }
}

function require(arr, fn) {
    if (arr) {
        for (var i = 0; i < arr.length; i++) {
            fn(arr[i])
        }
    }
    return fn
}