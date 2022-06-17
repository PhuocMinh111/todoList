
export default class List {
    constructor(list, finish) {
        this.list = list;
        this.finishList = finish;
        this.sortList = [];
    }
    add(item) {
        this.list.push(item);
        const time = new Date().toLocaleTimeString();
        this.list = this.list.map((item, index) => {
            let id = Math.floor(Math.random() * 99);
            if (item.id != id) {
                return { ...item, id: id, time: time };
            } else return { ...item, time: time }
        })
    }
    sort(key) {
        const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        switch (key) {
            case "a-z":
                this.sortList = this.list.sort((prev, next) => {
                    const l1 = prev.task.split('')[0];
                    const l2 = next.task.split('')[0];
                    if (alphabet.indexOf(l1) == -1 || alphabet.indexOf(l2) == -1) return alphabet.indexOf(l1) == -1 ? 1 : -1;
                    return alphabet.indexOf(l1) - alphabet.indexOf(l2);
                })
                break;
            case 'z-a':
                const reverse = alphabet.reverse();
                this.sortList = this.list.sort((prev, next) => {
                    const l1 = prev.task.split('')[0];
                    const l2 = prev.task.split('')[0];
                    if (alphabet.indexOf(l1) == -1 || alphabet.indexOf(l2) == -1) return alphabet.indexOf(l1) == -1 ? 1 : -1;
                    return reverse.indexOf(l1) - reverse.indexOf(l2);
                })
                break;
            case 'time':
                this.sortList = this.list.sort((prev, next) => {
                    const t1 = prev.time;
                    const t2 = next.time;
                    return t1 > t2 ? 1 : -1;
                })

                break;
            default:
                break;
        }
        return this.sortList;

    }
    remove(id) {
        const finishItem = this.list.find(item => item.id == id);
        this.list = this.list.filter(item => item.id != id)
        if (!finishItem) return;
        this.finish(finishItem);
        console.log(this.finishList);
    }
    removeFinish(id) {
        this.finishList = this.finishList.filter(item => item.id !== id)
    }

    finish(item) {
        this.finishList.push(item);
    }

}