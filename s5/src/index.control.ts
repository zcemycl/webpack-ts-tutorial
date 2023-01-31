import { IView } from './index.view'
import { IModel } from './index.model'

class Controller {
    model: IModel
    view: IView

    constructor(model: IModel, view: IView) {
        this.model = model;
        this.view = view;
        this.view.p.innerHTML = this.model.count.toString()
        this.view.btn.textContent = 'Change Color'

        this.view.btn.addEventListener('click', () => {
            this.model.count ++; 
            console.log('click!!!')
            if (this.view.heading.className === "red")
                this.view.heading.className = "blue"
            else 
                this.view.heading.className = "red"
        
            this.view.p.innerHTML = this.model.count.toString();
        }, false)
    }
}

export {Controller}