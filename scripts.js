///TESTIMONALS///

//dots
const nextNext = document.getElementById('next-next')
const next = document.getElementById('next');
const prev = document.getElementById('prev');

//testimonials
const testi1 = document.querySelector('.testi1');
const testi2 = document.querySelector('.testi2');
const testi3 = document.querySelector('.testi3')

//testi container
const tests = document.querySelector('.tests');

let nextNextInt = window.setInterval(function() {
  //check for and remove second class
  if (tests.classList.contains('second')) {
    tests.classList.remove('second');

    //add the class which shows the third testimonial
    tests.classList.add('third');
  }

}, 4000)


let nextint = window.setInterval(function() {
  //check for and remove first class
  if (tests.classList.contains('first')) {
    tests.classList.remove('first');

    //add the class that shows the second testimonial
    tests.classList.add('second');
  }

}, 8000)

let prevint = window.setInterval(function() {
  //check for and remove third class
  if (tests.classList.contains('third')) {
    tests.classList.remove('third');

    //add the class that has the first testimonial
    tests.classList.add('first');
  }
}, 16000)

function dotClick(oldClassOne, oldClassTwo, newClass) {
    if (tests.classList.contains(oldClassOne)) {
        tests.classList.remove(oldClassOne);
    }

    if(tests.classList.contains(oldClassTwo)) {
        tests.classList.remove(oldClassTwo);
    }

    window.clearInterval(nextNextInt);
    window.clearInterval(nextint);
    window.clearInterval(prevint);
    tests.classList.add(newClass);
}

nextNext.addEventListener("click", function() {
    dotClick('second', 'first', 'third');
})

next.addEventListener("click", function() {
    dotClick('first', 'third', 'second');
})

prev.addEventListener("click", function() {
    dotClick('second', 'third', 'first');
})

///FAQ///

//declare const
const acc = document.getElementsByClassName("accordion");

for(let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
}

///POPUP///

//const
const popUp = document.getElementById('pop-up');
const popUpLayer = document.getElementById('pop-up-layer');
const closeModal = document.getElementById('pop-up-layer');

//nav button
const subBtn = document.getElementById('sub-btn')

subBtn.addEventListener("click", function() {
    popUpLayer.style.display = 'flex';
})

closeModal.addEventListener("click", function() {
    popUpLayer.style.display = 'none';
})

let popUpSeconds = 40;

let popUpFun = window.setInterval(function() {
    popUpLayer.style.display = 'flex';

    window.clearInterval(popUpFun);
}, popUpSeconds * 1000);
