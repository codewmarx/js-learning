
// js loops = Loops can execute a block of code a number of times.

// simple saterisk tree using for loop
let tree = ' ';

for (let i = 0; i < 10; i++) {
    for (let j = 10; j > i; j--) {
        tree += ' ';
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        tree += '*';
    }
    tree += "\n";
}
console.log(tree);
