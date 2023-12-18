let display = document.getElementById('display');
let equal = document.getElementById("equal");
let buttons = Array.from(document.getElementsByClassName('button'));
let image = document.getElementById("image");
let message = document.getElementById("message")
let clear = document.getElementById("clear")
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error";
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
equal.onclick = function() {
    if (display.innerText !== Error || "undefined") {
        image.src = "https://img.freepik.com/premium-vector/boys-are-writing-kids-doing-homework-maths-home-cartoon-cute-little-boy-red-shirt-siting-desk-concept-learning-age-vector-illustrations-isolated-white-background_505557-3509.jpg?w=2000";
        message.textContent = "Hope, This will help you Accordingly";
    } else {
        image.src = "https://media.time4learning.com/uploads/how-to-help-students-struggling-in-math-featured.png";
        message.textContent = "Now you can calculate here";

    }


}
clear.onclick = function() {
    image.src = "https://media.time4learning.com/uploads/how-to-help-students-struggling-in-math-featured.png";
    message.textContent = "Now you can calculate here";
}