console.log("Hello world!");
// JS doksi: https://developer.mozilla.org/en-US/docs/Web/JavaScript
// GitHub: https://github.com/Valentinusz/webprog-2023-24-1-5
// Canvas: https://canvas.elte.hu/courses/38953

// 2. Készítsd el a Fahrenheitből Celsius fokba átalakító függvényt! 5/9 * (F-32)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
function f2c(F)
{
    return 5/9 * (F-32);
}
console.log(f2c(32));

const f2c2 = function(F){
    return 5/9 * (F-32);
}

const f2c3 = (F) => {
    return 5/9 * (F-32);
}

const f2c4 = F => (5/9 * (F-32));

// 7. Adott két szám. Írj függvényt, amely visszaadja legnagyobb közös osztójukat!
function lnko(a, b)
{
    if (a < b)
    {
        [a,b] = [b,a]; //csere
    }
    let maradek = a % b;
    while (maradek > 0)
    {
        a = b;
        b = maradek;
        maradek = a % b;
    }
    return b;
}

console.log(lnko(30,20));

// tömbfüggvények

// 11. Egy számsorozatban keress meg egy negatív számot.
const numbers = [2, 5, 9, -1, 3, 5, 1, 2, 1];

console.log(numbers.find(number => number < 0));
console.log(numbers.findIndex(number => number < 0));

// 12. Számold meg, hány páros szám van egy számokat tartalmazó tömbben!

console.log("Páros számok száma: ", numbers.filter(number => number % 2 === 0).length);

// 13. Válogasd ki azokat a számokat, amelyek mindkét szomszédjuktól egy előre bekért értéken belül térnek el.
const limit = 2;
console.log(numbers.filter((currentValue, currentIndex, array) => {
    return Math.abs(currentValue - array[currentIndex - 1]) < limit && Math.abs(currentValue - array[currentIndex - 1]) < limit;
}))

// 16. Döntsd el egy mátrixról, hogy minden eleme páros-e!
const matrix = [[1, 2, 3], [2, 3, 4], [6, 4, 2]];

console.log(matrix.every(row => row.every(number => number % 2 === 0)))
console.log(matrix.every(row => row.some(number => number % 2 === 0)))


// Objects
const obj = {
    mezo1 : 12,
    'mezo2': '12',
    metodus(){
        console.log(this.mezo1, this.mezo2);
    },
    metodus2: function(){
        console.log(this.mezo1, this.mezo2);
    }
}
obj.metodus();
obj.metodus2();


class Movie{
    constructor(title, length, category, directors){
        this.title = title;
        this.length = length;
        this.category = category;
        this.directors = [...directors];
    }
}
// 27. a, b, c
const movies = [
    new Movie("Harry Potter and the Philosopher's Stone", 152, "fantasy", ["David Heyman"]),
    new Movie("Harry Potter and the Prisoner of Azkaban", 142, "fantasy", ["David Heyman", "Chris Columbus", "Mark Radcliffe"]),
    new Movie("Harry Potter and the Half-Blood Prince", 153, "fantasy", ["David Heyman", "David Barron"])
]
console.log(movies);

// a

movies.forEach(movie => console.log(movie));
movies.forEach(console.log);
console.table(movies);

// b

console.table(movies.filter(({directors}) => directors.length > 1));

// c 

console.log(movies.reduce((longest, currentMovie) => currentMovie.length > longest.length ? currentMovie : longest), movies[0])

// 29. a, b, c, d, e, g, h 
const temperatures = [5, 6, -1, 8, 12, 13, 15, 4, -2, 5, 9, 15, 20, 19, 17];

console.log(temperatures.filter(temp => temp <= 0));

console.log(temperatures.map(temp => temp + '°C'));

console.log(temperatures.reduce((max, currtemp) => (currtemp > max ? currtemp : max), -Infinity));

console.log(temperatures.filter(temp => temp < 20));

console.log(temperatures.some(temp => temp > 40));

console.log(temperatures.every(temp => temp > 0));

console.log(temperatures.find(temp => temp > 10));
// 28. házi