let count = 0;
const btn = document.createElement('button')
const p = document.createElement('div')
const heading = document.querySelector('h1')
p.innerHTML = count
btn.textContent = 'Change Color'
btn.addEventListener('click', () => {
    count ++; 
    console.log('click!!!')
    if (heading.className === "red")
        heading.className = "blue"
    else 
        heading.className = "red"

    p.innerHTML = count;
}, false)
document.body.appendChild(btn);
document.body.appendChild(p);