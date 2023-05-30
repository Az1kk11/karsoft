import axios from "./api";

const ProjectServices = {
    async projectsData() {
        const { data } = await axios.get('/projects')
        return data
    }
}
export default ProjectServices