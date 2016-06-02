import {render} from 'util'

export class MainContent {

    render() {
        const title = "Hello World";
        return render`<div>
            <CotyaTitle title="${title}"/>
        </div>`
    }

}