import axios from "./api";

const vacansyServices = {
    async vacansyData() {
        const { data } = await axios.get('/vacancies')
        return data
    },
    async vacansyPost(vacancies) {
        const { data } = await axios.post('/vacancies', vacancies)
        return data
    },
    async vacansyDelete(id) {
        const { data } = await axios.delete(`/vacancies/${id}`)
        return data
    },
}
export default vacansyServices