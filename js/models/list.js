
export default class List {
    constructor() {
        this.list = [];
        this.finishList = [];
    }
    add(item) {
        this.list.push(item);
        this.list = this.list.map((item, index) => {
            return { ...item, id: index };
        })
    }
    sort(key) {
        const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        switch (key) {
            case "a-z":

                break;
            case 'z-a':

                break;
            default:
                break;
        }

    }
    remove(id) {
        const finishItem = this.list.find(item => item.id == id);
        this.list = this.list.filter(item => item.id != id)
        if (!finishItem) return;
        this.finish(finishItem);
        console.log(this.finishList);
    }
    finish(item) {
        this.finishList.push(item);
    }

}