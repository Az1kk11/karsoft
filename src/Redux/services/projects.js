import axios from "./api";

const ProjectServices = {
    async projectsData() {
        const { data } = await axios.get('/projects')
        return data
    },
    async projectsPost(project) {
        const { data } = await axios.post('/projects', project)
        return data
    },
}
export default ProjectServices