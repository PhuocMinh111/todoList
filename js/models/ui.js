export default class UI {
    getEle(id) {
        return document.getElementById(id);
    }
    render(data, cond) {
        const content = data.reduce((_, item) => {
            _ += `
            <li>
            ${item.task}
            </li>`
            return _;

        }, '')
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