const userNumberInput = prompt('Input a number');

if (userNumberInput === null) {
    alert('You canceled!');
}
else if (!userNumberInput.trim()) {
    alert('You have entered nothing!');
}
else if (isNaN(userNumberInput)) {
    alert('You entered not a number');
}
else {
    const wholeNumber = parseInt(userNumberInput);

    if (wholeNumber <= 1){
        alert('Number must be greater than 1');
    }
    else {
        let simpleNumber = true;

        let i;
        for (i = 2; i < wholeNumber; i++){
            if (wholeNumber % i === 0) {
                simpleNumber = false;
                break;
            }
        }

        if (simpleNumber) {
            alert(`${userNumberInput} is a simple number`);
        }
        else {
            alert(`${userNumberInput} is not a simple number`);
        }
    }
}