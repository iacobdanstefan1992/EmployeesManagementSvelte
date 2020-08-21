export default class Repository {

    constructor() {
        this._data = {};
        this._autoIndex = 1;
    }

    add(entity) {
        entity.id = this._autoIndex++;

        this._data[entity.id] = entity;
    }

    getAll() {
        /*
        const entities = [];
        for (const entityId in this._data) {
            entities.push(this._data[entityId]);
        }
        return entities;
        */
       return Object.values(this._data);
    }

    get(id) {
        return this._data[id];
    }

}
