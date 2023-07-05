const rateCircle = document.querySelectorAll(".rate-circle");
var selectedRate = 0;
const ratePage = document.querySelector("#rating-page");
const thankyouPage = document.querySelector("#thankyou-page");
var rateShown = 0;

function addWhiteText(id) {
    var obj = document.querySelector("#" + id + " p");
    obj.classList.add("white-text");
}

function removeWhiteText() {
    var obj = document.querySelector("#" + this.id + " p");
    obj.classList.remove("white-text");
}

function removeOrange() {
    rateCircle.forEach(item => {
        item.classList.remove("orange-circle");
    });
}

function clicked() {
    removeOrange();
    this.classList.add("orange-circle");
    selectedRate = document.querySelector("#" + this.id + " p").textContent;
    rateShown = selectedRate;
}

function hover(e) {
    addWhiteText(this.id);
}

function buttonClick() {
    if (selectedRate === 0) {
        alert("Choose a rating between 1 and 5.");
    }
    else {
        this.classList.add("clicked");
        setTimeout(function () {
            document.querySelector(".btn").classList.remove("clicked");
        }, 100);

        setTimeout(function () {
            ratePage.classList.add("hide");
            thankyouPage.classList.remove("hide");
        }, 200);

        document.querySelector(".user-rating").innerHTML = rateShown;
    }

}

rateCircle.forEach(item => {
    item.addEventListener("click", clicked);
    item.addEventListener("mouseover", hover);
    item.addEventListener("mouseout", removeWhiteText);
});

document.querySelector(".btn").addEventListener("click", buttonClick);


// Attribution

const myImg = document.querySelector("#my-img");
myImg.addEventListener("mouseover", function() {
    document.querySelector("#hidden").classList.remove("hide");
})

document.querySelector(".attribution").addEventListener("mouseleave", function() {
    document.querySelector("#hidden").classList.add("hide");
})