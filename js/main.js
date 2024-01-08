banner = document.querySelector(".banner").querySelectorAll("li");

let heroEl = document.querySelectorAll('.hero')

banner.forEach(elements => {
    elements.addEventListener('click', function () {
        banner.forEach(ban => ban.classList.remove('banner-item-active'))

        this.classList.add('banner-item-active')
    })
});


banner.forEach(el => {
    el.addEventListener('click', () => {
        heroEl.forEach(so => so.classList.toggle('hero-active'))

    })
});


will = document.querySelector(".will-left").querySelectorAll("li");

will.forEach(element => {
    element.addEventListener('click', function() {
        will.forEach(item => item.classList.remove('will-active'))

        this.classList.add('will-active')
    })
})


let box = document.querySelectorAll('.box')

for(i=0; i<box.length; i++) {
    box[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

