
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
    sort() {

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