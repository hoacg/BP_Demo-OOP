// Khai bao

function Apple() {
    this.weight = 10;

    this.decrease = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    };

    this.isEmpty = function () {
        return (this.weight === 0);
    };

    this.getWeight = function () {
        return this.weight;
    }
}

function Human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.isMale = function () {
        return (this.gender === true);
    };

    this.setGender = function (gender) {
        this.gender = gender;
    };

    this.checkApple = function (apple) {
        return (apple.isEmpty() === false);
    };

    this.eat = function (apple) {
        this.weight++;
        apple.decrease();
    };

    this.say = function (sentence) {
        // alert(sentence); // chưa tốt
        return sentence;
    };

    this.getName = function () {
        return this.name;
    };

    this.setName = function (name) {
        this.name = name;
    };


    this.getWeight = function () {
        return this.weight;
    };

    this.setWeight = function (weight) {
        this.weight = weight;
    }

}
