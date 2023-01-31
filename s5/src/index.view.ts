export interface IView {
    btn: HTMLButtonElement
    p: HTMLDivElement
    heading: HTMLHeadingElement
}

export class View{
    btn: HTMLButtonElement
    p: HTMLDivElement
    heading: HTMLHeadingElement
    constructor() {
        this.btn = document.querySelector('button') as HTMLButtonElement
        this.p = document.querySelector('div') as HTMLDivElement
        this.heading = document.querySelector('h1') as HTMLHeadingElement
    }
}