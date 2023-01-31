const btn = document.createElement('button')
const heading = document.querySelector('h1')
btn.textContent = 'Change Color'
btn.addEventListener('click', () => {
    console.log('click!!!')
    if (heading.className === "red")
        heading.className = "blue"
    else 
        heading.className = "red"
}, false)
document.body.appendChild(btn);