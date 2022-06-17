
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
    renderAll(todo, finish, l) {
        this.render(todo, 'todo');
        this.render(finish, 'finish');
        this.addEvent(l);

    }
    addEvent(list) {
        document.querySelectorAll(".buttons button").forEach((item, index) => {
            item.addEventListener('click', () => {
                console.log('work');
                list.remove(item.id);
                this.render(list.list, 'todo');
                this.render(list.finishList, 'finish')
                setData();
            })
        });
    }
    get(id) {
        return this.getEle(id).value;
    }
}