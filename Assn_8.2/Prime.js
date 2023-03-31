//function to check if a number is prime or not. It will check if the number is divisible from 2 to its square root.

function isPrimeNum(x)
{
    for(let i=2;i<=Math.sqrt(x);i++)
    {
        if(x%i == 0)
            return false;
    }
    
    return true
}


var x = 23;

if(isPrimeNum(x))
    console.log(x, "is a Prime Number");
else
    console.log(x, "is not a Prime Number");
    

var nextPrime = x+1;

// starting from current number we will check for next prime number
while(!isPrimeNum(nextPrime))nextPrime++;

console.log("Difference between next prime number ",nextPrime," and ",x," is ", nextPrime-x);
