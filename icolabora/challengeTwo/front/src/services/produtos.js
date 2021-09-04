import {http} from './config'

export default {

    listar:() => {
        return http.get('/todo')
    },

    salvar:(produto) => {
        return http.post('/todo', produto)
    },

    update:(produto, pid) =>{
        return http.put(`/todo/${pid}`, produto)
    },

    delete:(pid) =>{
        return http.delete(`/todo/${pid}`)
    }
}