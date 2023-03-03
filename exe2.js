function fibonacci(num) {
    let fib = [0, 1];
    while (fib[fib.length - 1] < num) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    if (fib.includes(num)) {
      console.log(num + " pertence à sequência de Fibonacci");
    } else {
      console.log(num + " não pertence à sequência de Fibonacci");
    }
    return fib;
  }
  
  let num = 20;
  fibonacci(num);