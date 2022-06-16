export default class List {
    constructor() {
        this.list = [];
        this.finish = [];
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
        this.list = this.list.filter(item => item.id != id)
        this.finish(this.list.find(item => item.id == id));
    }
    finish(item) {
        this.finish.push(item);
    }

}