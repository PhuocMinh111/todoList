import List from "./models/list.js";
import Task from "./models/task.js";
import UI from "./models/ui.js";

const u = new UI();
const l = new List();
u.getEle("addItem").addEventListener('click', () => {
    const input = u.get("newTask");
    const newTask = new Task(input);
    l.add(newTask);
    u.render(l.list, 'todo');
    document.querySelectorAll(".buttons button").forEach((item, index) => {
        item.addEventListener('click', () => {
            l.remove(item.id);
            u.render(l.list, 'todo');
            u.render(l.finishList, 'finish')
        })
    }
    )

})
