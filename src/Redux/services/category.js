import axios from "./api";

const CategoriesServices = {
    async categoriesData() {
        const { data } = await axios.get('/categories')
        return data
    }
}
export default CategoriesServices