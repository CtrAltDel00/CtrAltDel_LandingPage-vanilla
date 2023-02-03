var currentIndex = 0; // Declare and initialize the current index
var cards = document.querySelectorAll('.card');
let topBtn = document.querySelector('#topButton')
let list = document.querySelector('.list')
let childrenObs = list.children
let current = []
function classAdder() {
    if (document.querySelector('.container').clientWidth < 800) {
        return 
    }else{
        current[0].classList.add('active')
        cards.forEach((item, id)=>{
            if (currentIndex === id) {
                item.classList.add('active')
                item.classList.add("animateAdd")
                current.push(item)
            }else{
                item.classList.remove('active')
            }
        })   
    }
}

let currentMover = setInterval(()=>{
    if (currentIndex === 2) {
        currentIndex = -1
    }
    currentIndex = currentIndex + 1
    classAdder()
}, 5000)