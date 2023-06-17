import React, { useEffect, useState } from 'react'
import './Users.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import kratos from '../../Assets/Images/kratos.jpg'
import { Trash } from 'tabler-icons-react'
function Users() {
    
    const [newData,setNewData]=useState([])
    
    //functions
    const trashHandler=(id)=>{
        console.log(id)
        axios.delete(`https://6000a93bcb21e10017af91f7.mockapi.io/api/services/app/CompanyUnitContacts/GetAllPostcodeDistricts/${id}`)
        .then(res=>{
            toast.success('User Deleted Successfully')
            if(res.status===200){
                setNewData(newData.filter(item=>item.id!==id))
            }
        })
    }

    //useeffect
    useEffect(() => {
        axios.get('https://6000a93bcb21e10017af91f7.mockapi.io/api/services/app/CompanyUnitContacts/GetAllPostcodeDistricts')
        .then(res => {
            setNewData(res.data.result.items)
            toast.success('Users Fetched Successfully')
            if(res.status===200){
            }
        }).catch(err => {
            toast.error('Error while fetching Users')
        })
    }, [])
    
    return (
        <>
            <div className='MainContainer'>
                <div className='card'>
                    <h2>Users</h2>
                    <div className='users'>
                        {newData.map((item) => {
                            return (
                                <div className='user' key={item.id}>
                                        <div className='userInfo'>
                                            <img src={kratos} alt='user' />
                                            <h3>{item.id}:</h3>
                                            <p>{item.name}</p>
                                            <div className='icon'>
                                                <Trash size={30} strokeWidth={2} color={'#bf4040'} onClick={()=>trashHandler(item.id)}/>
                                            </div>
                                        </div>
                                </div>
                            )
                        })} 
                    </div>
                </div>
            {/* <NewUser data={data} setData={setData}></NewUser> */}
                
            </div>

        </>
    )
}

export default Users