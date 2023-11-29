import React from 'react'
import "./users.scss"
import DataTable from '../../components/dataTable/DataTable'
import { userColumns, userRows } from '../../data'

const Users = () => {
    return (
        <div className='users'>
            <div className="info">
                <h1>Users</h1>
                <button>Add New User</button>
            </div>
            <DataTable slug="users"/>
        </div>
    )
}

export default Users