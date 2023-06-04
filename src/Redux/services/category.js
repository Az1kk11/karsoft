import axios from "./api";

const CategoriesServices = {
    async categoriesData() {
        const { data } = await axios.get('/categories')
        return data
    },
    async categoriesDelete(id) {
        const { data } = await axios.delete(`/categories/${id}`)
        return data
    },
    async categoriesPost(categories) {
        const { data } = await axios.post('/categories', categories )
        return data
    }
}
export default CategoriesServices