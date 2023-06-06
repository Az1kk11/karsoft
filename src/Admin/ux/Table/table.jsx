import { Button, Table } from 'reactstrap'
import './table.css'

function TableUI({ data, thead, deleteHandler }) {

    return (
        <div className="table-ui">
            <Table
                className='mt-4'
            >
                <thead>
                    <tr className='text-light'>
                        {thead?.map((item, index) => (
                            <th key={index}>{item.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='text-light'>
                    {data?.map(item => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
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
            </Table>
        </div>
    )
}

export default TableUI