export default class Repository {

    constructor() {
        this._data = {};
        this._autoIndex = 1;
    }

    add(entity) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                entity.id = this._autoIndex++;
                this._data[entity.id] = entity;

                resolve(entity);
            }, 500);
        });        
    }

    getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.values(this._data));
            }, 2000);
        });        
    }

    get(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const entity = Object.assign({}, this._data[id]);
                resolve(entity);
            }, 500);
        });   
    }

    update(id, entity) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (entity.id !== id) {
                    reject("The provided ID to be updated and the entity ID are not the same.");
                    return;
                }

                this._data[id] = entity;
                resolve(entity);
            }, 500);
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                delete this._data[id];
                resolve();
            }, 500);
        });
    }

}