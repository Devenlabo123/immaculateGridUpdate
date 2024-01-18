import '../styles/popup.scss';
import { myFunction } from"./lambdaSend";

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("myButton");
    console.log('a')
    if (button) {
        console.log('b')
        button.addEventListener("click", myFunction);
    }
});
