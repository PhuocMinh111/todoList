import List from "./models/list.js";
import Task from "./models/task.js";
import UI from "./models/ui.js";
let list = [], finish = [];
const data = JSON.parse(localStorage.getItem('data'));
if (data) { list = data.todo; finish = data.finish }
const u = new UI();
const l = new List(list, finish);

//render 

u.renderAll(l.list, l.finishList);

// 
u.getEle("addItem").addEventListener('click', () => {
    const input = u.get("newTask");
    u.getEle('newTask').value = '';
    const newTask = new Task(input);
    l.add(newTask);
    u.render(l.list, 'todo');
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




function addEvent() {
    document.querySelector("#todo").addEventListener('click', (evt) => {
        const isBtn = evt.target.nodeName == "I";
        if (!isBtn) return;
        const id = evt.target.parentNode.id;
        console.log('work');
        l.remove(id);
        console.log(l);
        u.render(l.list, 'todo');
        u.render(l.finishList, 'finish')
        // func();
        setData();
    }
    );
    document.querySelector("#completed").addEventListener('click', (evt) => {
        const isBtn = evt.target.nodeName == "I";
        if (!isBtn) return;
        const id = evt.target.parentNode.id;
        console.log(id);
        l.pop(id);
        console.log(l.finishList);
        u.render(l.finishList, 'finish')
        // func();
        setData()
    }
    );
}
addEvent();



function setData() {
    const string = JSON.stringify({
        todo: l.list,
        finish: l.finishList,
    })
    localStorage.setItem('data', string);
}