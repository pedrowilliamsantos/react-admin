import React, { useState } from 'react'
import "./users.scss"
import DataTable from '../../components/dataTable/DataTable'
import Add from '../../components/add/Add'
import { userRows, userColumns } from '../../data'

const Users = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='users'>
            <div className="info">
                <h1>Users</h1>
                <button onClick={()=>setOpen(true)}>Add New User</button>
            </div>
            <DataTable slug="users" rows = {userRows} columns = {userColumns}/>
            {open && <Add slug = "user" columns={userColumns} setOpen={setOpen}/>}
        </div>
    )
}

export default Users