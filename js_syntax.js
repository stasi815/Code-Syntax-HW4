function FizzBuzz(target) {
        for (let i = 1; i < target; i++;) {
            let result = "";
            if (i % 3 === 0) result += "Fizz";
                else if (i % 5 === 0) result += "Buzz";
                    else if (i % 3 > 0 & i % 5 > 0);
                        result = i
                    console.log(result += "\n");
        }
    }
FizzBuzz(50)