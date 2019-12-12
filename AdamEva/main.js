// Su dung

let adam = new Human("Adam", true, 60);
let eva = new Human("Eva", false, 47);

let apple = new Apple();


function updateUI(text) {
    let dialog = document.getElementById("dialog");
    dialog.innerHTML += text + '<br>';
}


while (apple.isEmpty() === false) {

    updateUI(adam.say("Eva ăn táo đi!"));
    eva.eat(apple);

    if (apple.isEmpty()) {
        break;
    }

    updateUI(eva.say("Eva ăn rồi! Adam ăn đi!"));
    adam.eat(apple);

    if (apple.isEmpty()) {
        break;
    }

}
