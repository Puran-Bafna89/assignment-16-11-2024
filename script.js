function fibo(){
    let arr = [];
    let num = document.getElementById("fibonacci").value;
    num = Number.parseInt(num);
    if(num == 0){
        console.log("Number should be greater then 1");
    }
    else{
        // function fibona(num){
            if(num == 1){
                arr[0] = 0;
                // return 0;
            }
            else if(num == 2){
                arr[0] = 0;
                arr[1] = 1;
            }
            else{
                arr = [0,1];
                let i = 2;
                while(i < num){
                    arr[i] = arr[i - 2] + arr[i - 1];
                    i++;
                }
            }
            console.log(...arr);
            let a = arr.toString().replace(/,/g, " ");
            console.log(a);
            document.getElementById("subContainer").innerHTML += `<br/>------- Fibonacci number are --------<br/>` + a;
        // }
    }
}

function prime(){
    let num1 = document.getElementById("primeStart").value;
    let num2 = document.getElementById("primeEnd").value;
    let isPrime = false;
    let primenumber = [];
    if(num1 == "" || num2 == ""){
        document.getElementById("subContainer").innerHTML += `<br/>` + "Enter a valid number";
    }
    else{
        num1 = Number.parseInt(num1);
        num2 = Number.parseInt(num2);
        if(num2 > num1){
            while(num1 < num2){
                // isPrime = false;
                for(i=1; i<9; i++){
                    if(i == 1 || i == num1){
                        continue;
                    }
                    else{
                        if(num1 % i == 0){
                            isPrime = true;
                            num1++;
                            i=0;
                        }
                        else{
                            isPrime = false;
                        }
                    }
                }
                if(isPrime == false && num1<num2){
                    primenumber.push(num1);
                    // num1++;
                }
                num1++;
            }
        }
        else{
            document.getElementById("subContainer").innerHTML += `<br/>` + "Second number should be greater then first number";
        }
    }
    // console.log(primenumber);
    let a = primenumber.toString().replace(/,/g, " ");
    // console.log(a);
    document.getElementById("subContainer").innerHTML += `<br/>------- Prime number are --------<br/>` + a;
}

function factor(n){
    if(n == 0){
        return 1;
    }
    return n * factor(n-1);
}

function factorial(){
    let num = document.getElementById("facto").value;
    num = Number.parseInt(num);
    let result = factor(num);
    // console.log(result);
    document.getElementById("subContainer").innerHTML += `<br/> Factorial of  ${num} is ${result}`;
}

let choice = document.getElementById("numEntered");
choice.addEventListener("keyup", function(){
    switch(Number.parseInt(choice.value)){
        case 1: console.log("You entered 1");
                document.getElementById("subContainer").innerHTML = `<label for="fibonacci">Enter a Number for Fibonacci series</label><input type="number" name="fibonacci" id="fibonacci"><button onclick="fibo()">Display</button>`;
                break;
        case 2: console.log("You Entered 2");
                document.getElementById("subContainer").innerHTML = `<label for="fibonacci">Enter a Number to Generate Prime Numbers</label><div class="prime"><input type="number" name="primeStart" id="primeStart" placeholder="Enter starting number"><input type="number" name="primeEnd" id="primeEnd" placeholder="Enter ending number"></div><button onclick="prime()">Display</button>`
                break;
        case 3: console.log("You Entered 3");
                document.getElementById("subContainer").innerHTML = `<label for="facto">Enter a Number to find its Factorial</label><input type="number" name="facto" id="facto"><button onclick="factorial()">Display</button>`;
                break;
        default:  document.getElementById("subContainer").innerHTML = "";      
    }
});