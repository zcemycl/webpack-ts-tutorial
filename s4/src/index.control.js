class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.p.innerHTML = this.model.count
        this.view.btn.textContent = 'Change Color'

        this.view.btn.addEventListener('click', () => {
            this.model.count ++; 
            console.log('click!!!')
            if (this.view.heading.className === "red")
                this.view.heading.className = "blue"
            else 
                this.view.heading.className = "red"
        
            this.view.p.innerHTML = this.model.count;
        }, false)
    }
}

export {Controller}