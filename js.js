// menu and cancel icon even listener
document.querySelector('.fa-bars').addEventListener('click', menu)

document.querySelector('.fa-xmark').addEventListener('click', cancel)

// click on each menu
const menuList = document.getElementById('mobile-menu-ul')

const items= menuList.getElementsByTagName('li')

for(let i=0; i < items.length; i++){
    items[i].addEventListener('click',cancel)
}


const cancelIcon = document.querySelector('.fa-xmark')

const menuIcon =  document.querySelector('.fa-bars')


function menu(){
    document.querySelector('.mobile-menu').style.top = '50px'
    cancelIcon.style.opacity = 1
    menuIcon.style.opacity = 0
    menuIcon.style.right = '20px'
    cancelIcon.style.right = 0
}

function cancel(){
    document.querySelector('.mobile-menu').style.top = '-500px'
   menuIcon.style.opacity = 1
   menuIcon.style.right = 0
    cancelIcon.style.opacity = 0
    cancelIcon.style.right = '10px'

}