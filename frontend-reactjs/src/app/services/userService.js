import ApiService from '../api-service'

export default class UserService extends ApiService{

    constructor() {
        super('/api/users')
    }

    obterPorId(id) {
        return this.get(`/${id}`);
    }

    insert(user) {
        return this.post('/', user);
    }

    update(user) {
        return this.put(`/${user.id}`, user);
    }    

    findByParams(userFilter) {
        let params = `?name=${userFilter.name}`

        if(userFilter.age) {
            params = `${params}&age=${userFilter.age}`
        }

        if(userFilter.salary) {
            params = `${params}&salary=${userFilter.salary}`
        }

        return this.get(params)
    }

    deletar(id) {
        return this.delete(`/${id}`)
    }

}