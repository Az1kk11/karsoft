import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { responVacanStart, responVacanSuccess } from '../../Redux/slice/respondsVacSlice'
import RespondsVacancyServices from '../../Redux/services/respons'

import { Button, Container, Table } from 'reactstrap'
import '../css/responds.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const theadName = [
    { name: 'ID' },
    { name: 'UserName' },
    { name: 'Vacancy' },
    { name: 'Detail' },
    { name: 'Action' },
]

function Responds() {
    const dispatch = useDispatch()
    const { responVacan, isLoading } = useSelector(state => state.responVacan)
    const navigate = useNavigate()

    const respondsget = async () => {
        dispatch(responVacanStart())
        try {
            const response = await RespondsVacancyServices.respondsGet()
            dispatch(responVacanSuccess(response.data))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        respondsget()
    }, [])

    const deleteHandler = async id => {
        try {
            await RespondsVacancyServices.respondsDelete(id)
            respondsget()
            toast.success('Responds succesfuly deleted')
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <section className='responds-page'>
            <Container>
                <h3 className='text-light'>Responds</h3>
                <div className="table-responds mt-3">
                    <Table
                        className='mt-4'
                    >
                        <thead>
                            <tr className='text-light'>
                                {theadName?.map((item, index) => (
                                    <th key={index}>{item?.name}</th>
                                ))}
                            </tr>
                        </thead>
                        {isLoading ? (
                            <h3 className='text-light text-center mt-5 ml-5'>Loading...</h3>
                        ) : (
                            <tbody className='text-light'>
                                {responVacan?.map(item => (
                                    <tr key={item?.id}>
                                        <th>{item?.id}</th>
                                        <td>{item?.name}</td>
                                        <td>{item?.vacancy_title}</td>
                                        <td>
                                            <i
                                                onClick={() => navigate(`/admin/responds/${item.id}`)}
                                                className="ri-eye-fill"
                                            >
                                            </i>
                                        </td>
                                        <td>
                                            <Button
                                                color='danger'
                                                className='p-1'
                                                onClick={() => deleteHandler(item.id)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </Table>
                </div>
            </Container>
        </section>
    )
}

export default Responds