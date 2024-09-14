// console.dir(document.querySelectorAll(".main-container img"));

// let para = document.querySelectorAll("article p");

// // for ( let i = 0; i<para.length; i++){
// //     para[i].style.color = "green";
// // }


// for (para in para){
//     paragraph.style.color = "green";
// }

// let images = document.querySelectorAll("article img");


// for (let i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", function () {
//         if (this.getAttribute('src') == "./images/icon-plus.svg") {
//             this.setAttribute('src', "./images/icon-minus.svg");
//             ans.classList.add(".answer .active");
//         } else {
//             this.setAttribute('src', "./images/icon-plus.svg");
//         }
//     });

// }

const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const para = document.querySelectorAll(".para");


for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
        plus[i].classList.toggle("hidden");
        minus[i].classList.toggle("hidden");
        para[i].classList.toggle("hidden");
    })
}
for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function () {
        plus[i].classList.toggle("hidden");
        minus[i].classList.toggle("hidden");
        para[i].classList.toggle("hidden");
    })
}


