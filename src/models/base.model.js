export default class BaseModel {
    constructor(data) {
        this.$$hash = Date.now();
        Object.assign(this, data);
    }
}