import {render} from 'util'

export class CotyaTitle {

    constructor(props) {
        this.title = props.title;
    }
    
    render() {
        return render`<h2>${this.title}</h2>`
    }
    
}