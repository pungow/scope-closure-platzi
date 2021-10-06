var a = 'Hola';

function hello() {
    let b = 'Hola Mundo';
    const c = 'Hola Mundo!';
    if (true) {
        let d = 'Hello World!!';
        debugger
    }
}

hello();


const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(20);