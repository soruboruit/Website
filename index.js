let unko = "hellloooo!!";
console.log(unko);

let inoki = ["1", "2", "3", "4"];

// Loop statement
let index = 0;
while (index < inoki.length) {
    console.log(inoki[index]);
    index++;
}

// Function
const test = (arg) => {
    if (inoki.length > arg) {
        console.log("brabara");
    } else {
        console.log('borobroo');
    }
};
test(2);

// Object
const unko2 = {
    color: "pink",
    size: "large",
    purfume: "mint"
};

document.getElementsByTagName('button')[1].addEventListener('click', () => {
    window.alert('hello');
});
