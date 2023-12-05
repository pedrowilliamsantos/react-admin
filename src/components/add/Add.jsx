import "./add.scss"
import { userColumns } from "../../data"

const Add = (props) => {
    
    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className='add'>
            <div className="modal">
                <span className="close" onClick={()=>props.setOpen(false)}>X</span>
                <h1>Add new {props.slug}</h1>
                <form onSubmit={handleSubmit}>
                    {userColumns.filter((item)=>item.field !== "id" && item.field !== "img")
                    .map((userColumns)=>(
                        <div className="item">
                            <label>{userColumns.headerName}</label>
                            <input type={userColumns.type} placeholder={userColumns.field} />
                        </div>
                    ))}
                    <button>send</button>
                </form>
            </div>
        </div>
    )
}

export default Add