import axios from "./api";

const RespondsVacancyServices = {
    async postRespondsVacancy(respon) {
        const { data } = await axios.post('/responds', respon)
        return data
    },
    async respondsGet(){
        const { data } = await axios.get('/responds')
        return data
    },
    async respondsDetialGet(id){
        const { data } = await axios.get(`/responds/${id}`)
        return data
    },
    async respondsDelete(id){
        const { data } = await axios.delete(`/responds/${id}`)
        return data
    },
}

export default RespondsVacancyServices