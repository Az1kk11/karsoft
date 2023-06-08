import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Table } from 'reactstrap'
import { getResponDetailStart, getResponDetailSuccess } from '../../Redux/slice/respondsVacSlice'
import RespondsVacancyServices from '../../Redux/services/respons'
import { useEffect } from 'react'

const theadName = [
  { name: 'ID' },
  { name: 'Vacancy ID' },
  { name: 'UserName' },
  { name: 'Vacancy' },
  { name: 'Phone' },
  { name: 'Email' },
  { name: 'Text' },
  { name: 'Vacancy Title' }
]

function RespondsDetail() {
  const { responDetail, isLoading } = useSelector(state => state.responVacan)
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const respondsDetailGet = async () => {
    dispatch(getResponDetailStart())
    try {
      const response = await RespondsVacancyServices.respondsDetialGet(id)
      dispatch(getResponDetailSuccess(response.data))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    respondsDetailGet()
  },[])

  return (
    <section className='responds-page'>
      <Container>

        <h3 className='close-detail'>
          <span
            onClick={() => navigate('/admin/responds')}
          >
            Responds
          </span>
          - details
        </h3>
        <div className="responds-detail">
          <ul className='left'>
            <li>ID</li>
            <li>Vacancy Id</li>
            <li>User Name</li>
            <li>Phone</li>
            <li>Email</li>
            <li>Text</li>
            <li>Vacancy Title</li>
          </ul>
          <ul className='right'>
            <li>{responDetail.id}</li>
            <li>{responDetail.vacancy_id}</li>
            <li>{responDetail.name}</li>
            <li>{responDetail.phone}</li>
            <li>{responDetail.email}</li>
            <li>{responDetail.text}</li>
            <li>{responDetail.vacancy_title}</li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default RespondsDetail