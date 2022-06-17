export default class Task {
    id = 1;
    constructor(task) {
        const time = new Date().toLocaleTimeString()
        let id = 0;
        this.check = false;
        this.task = task;
        this.id;
        this.time = time;

    }
}