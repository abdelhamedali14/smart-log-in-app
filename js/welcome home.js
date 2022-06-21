let welcomeMessage = document.getElementById('welcomeMessage')
let xx = JSON.parse(localStorage.getItem('userlist'))
let i = Number(localStorage.getItem('index'))

// console.log(i);

welcomeMessage.innerHTML = ` welcome ${xx[i].name }`
