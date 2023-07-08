function getInt() {
    input = +prompt("Enter a number greater than 100!");
    while (input < 100) {
        input = input = +prompt("Enter a number greater than 100!");
    }
    console.log(input);
}
getInt();