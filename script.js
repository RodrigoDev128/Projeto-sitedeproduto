

const abrirmenu = () => {
    if (navbar.style.display == 'flex') {
        navbar.style.display = 'none'
    }else {
        navbar.style.display = 'flex'
    }
}

const checknav = () => {
    if (window.innerWidth >=768) {
        navbar.style.display = 'flex'
    }else if (window.innerWidth<768) {
        navbar.style.display = 'none'
    }
    
}