const getPrimes = (num) => {
    let max = Math.sqrt(num);
    for (let j = 2; j < num; j++){
        let flag = 1
        for (let i = 2; i < max; i++) {
            if(j % i === 0 && i !== j)
                flag = 0;
        }
        if(flag === 1){
            console.log(j);
        }
    }
};

getPrimes(100);
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...