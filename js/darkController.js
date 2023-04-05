// Dupla: Jaci Verheij e Lucas de Paula

const html = document.querySelector('html')
const checkbox = document.querySelector('.darkController')

checkbox.addEventListener('change', function(){
    let bollResult = checkbox.checked

    if(bollResult){
        html.classList.toggle('dark_mode')
    }else{
        html.classList.toggle('dark_mode')
    }
})

