

/* Part 1

There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order. */


let personas = ["Sofia", "David", "Juan"]

console.log(personas);


/* Part 2

Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like? */


personas.push("Sara", "Augustin")
console.log(personas);

/* Part 3

It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like? */


personas.splice(2, 0, "Renata")
personas.push("Elena")
console.log(personas);


// -------------------------------------------------
/* 
Exercise #2

Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *

 */

  for(let i = 1; i <= 5; i++){ //Se comienza el patro inicial con 1 y se limita con <= 5 para que llegue nuestro patron de asteriscos hasta 5 o se pueden tambien con <6 para que el limite sea 5
    let patron= ''; //Se muestra un resultado vacio 
    
    for(let j = 1; j <= i; j++){ //Se agrega un for anidado en donde "i" represanta la altura que va a tener el patron y "j" la anchura.
        patron += '* '; //Se acumula los valores del patron en asterisco hasta llegar al 5
    }
    console.log(patron); //Se muestra el patron 
} 




/* 
Exercise #3

Write while loops to do the following:

– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive.

- Print all the odd numbers between 1 - 100.

- Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]

- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190
 */