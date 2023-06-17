import React ,{useEffect, useState} from 'react'
import './NewUser.css'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import DataTabs from '../../Generic/DataTabs'


function NewUser() {

  const [name, setName] = useState("")
  const [id, setid] = useState("")
  const[refresh,setRefresh]=useState(false)
  const [tableData, setTableData] = useState([])
  //Table data
  const columns = [
        {
          name: 'id',
          selector:row=>row.id,
          sortable: true,
        },
        {
          name: 'Name',
          selector:row=>row.name,
          sortable: true,
        }]

  //funtions
  const SubmitHandler = async (e) => {
    e.preventDefault()
    const user = { name, id }
    axios.post('https://6000a93bcb21e10017af91f7.mockapi.io/api/services/app/CompanyUnitContacts/GetAllPostcodeDistricts', user)
        .then(res => {
          if (res.status === 201){
            toast.success('User Added Successfully')
          }
          else{
            toast.error('Error while adding new user')
          }
        })
        .catch(err => console.log("error while adding new user" + err))
    setName("")
    setid("")
    setRefresh(!refresh)
  }
  //useEffect
  useEffect(() => {
    axios.get('https://6000a93bcb21e10017af91f7.mockapi.io/api/services/app/CompanyUnitContacts/GetAllPostcodeDistricts')
    .then(res => {
      setTableData(res.data.result.items)
      setid(res.data.result.items.length+1)
      console.log(res.data.result.items)
    })

  }, [id,refresh])

  return (
    <>
    <div className='mainContainer'>
        <div className="newUser">
            <h2>New User</h2>
          <form onSubmit={SubmitHandler}>

            <input placeholder='id' 
                   type='id' 
                   readOnly={true}
                   onChange={(e) => setid(e.target.value)} 
                   value={id} 
                   required/>
            <input placeholder='Name' 
                   type='text' 
                   onChange={(e) => setName(e.target.value)} 
                   value={name} 
                   required/>
                   
            <button>Add User</button>
          </form>
        </div>
        <div className='table'>
          <DataTabs columns={columns} data={tableData}/>
        </div>
      </div>
    </>
  )
}

export default NewUser