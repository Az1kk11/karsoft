import axios from "./api";

const vacansyServices = {
    async vacansyData() {
        const { data } = await axios.get('/vacancies')
        return data
    }
}
export default vacansyServices