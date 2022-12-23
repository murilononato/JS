function fatorial(n){
    if(n == 1){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*
    else{
        5 * fatorial (5-1)

            else 4 * fatorial (4 - 1)

                else 3 fatorial (3 - 1)
    }

*/