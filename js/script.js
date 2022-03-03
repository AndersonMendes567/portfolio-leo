const btnToTop = document.querySelector('.btn-topo');
// console.log(btnToTop);

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    // console.log(scroll);
    if(scroll >= 800) {
        btnToTop.classList.add('show');
    } else {
        if (btnToTop.classList.contains('show')) btnToTop.classList.remove('show');;
    }
})
