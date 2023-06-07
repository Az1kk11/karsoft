import axios from "./api";

const RespondsVacancyServices = {
    async postRespondsVacancy(respon) {
        const { data } = await axios.post('/responds', respon)
        return data
    }
}

export default RespondsVacancyServices