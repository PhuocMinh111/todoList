import List from "./models/list.js";
import Task from "./models/task.js";
import UI from "./models/ui.js";
let list = [], finish = [];
const data = JSON.parse(localStorage.getItem('data'));
if (data) { list = data.todo; finish = data.finish }
const u = new UI();
const l = new List(list, finish);
console.log(l);

//render 
u.renderAll(l.list, l.finishList, l);


// 
u.getEle("addItem").addEventListener('click', () => {
    const input = u.get("newTask");
    u.getEle('newTask').value = '';
    const newTask = new Task(input);
    l.add(newTask);
    console.log(l.list);
    u.render(l.list, 'todo');
    document.querySelectorAll(".buttons button").forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log('work');
            l.remove(item.id);
            u.render(l.list, 'todo');
            u.render(l.finishList, 'finish')
            setData();
        })
    }
    )
    setData();
})
u.getEle("two").addEventListener('click', () => {
    u.render(l.sort('a-z'), 'todo');
})
u.getEle("three").addEventListener('click', () => {
    u.render(l.sort('z-a'), 'todo');
})
u.getEle('all').addEventListener('click', () => {
    u.render(l.sort('time'), 'todo');
})




function setData() {
    const string = JSON.stringify({
        todo: l.list,
        finish: l.finishList,
    })
    localStorage.setItem('data', string);
}