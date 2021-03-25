import Request from './Request';

class ToDoService extends Request {
    constructor() {
        super('todos');
    }
    getToDos() {
        const options = {
            method: 'GET',
        };
        return this.send({ path: '/', options }).then(({ status, json }) => ({ status, json }));
    }
    getToDoById(id) {
        const options = {
            method: 'GET',
        };
        return this.send({ path: `/${id}`, options }).then(({ status, json }) => ({ status, json }));
    }
    createToDo(data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data)
        };
        return this.send({ path: `/`, options }).then(({ status, json }) => ({ status, json }));
    }
    updateToDo(data, id) {
        const options = {
            method: 'PATCH',
            body: JSON.stringify(data)
        };
        return this.send({ path: `/${id}`, options }).then(({ status, json }) => ({ status, json }));
    }
    removeToDo(id) {
        const options = {
            method: 'DELETE',
        };
        return this.send({ path: `/${id}`, options }).then(({ status, json }) => ({ status, json }));
    }
}

export default new ToDoService();