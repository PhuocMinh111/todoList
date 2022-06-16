
export default class UI {
    constructor() {
        this.dataNode;
    }
    getEle(id) {
        return document.getElementById(id);
    }
    render(data, cond) {

        const content = data.reduce((_, item) => {
            _ += `
            <li>
            ${item.task}
            <div class="buttons">
            <button
            onclick="" id="${item.id}"
            class="remove">
            <i class="fas fa-times"
            ></i>
            </button>
            </div> 
            </li>`
            return _;

        }, '');
        switch (cond) {
            case "todo":
                this.getEle('todo').innerHTML = content;
                break;
            case "finish":
                this.getEle('completed').innerHTML = content;
            default:
                break;
        }
    }
    get(id) {
        return this.getEle(id).value;
    }
}