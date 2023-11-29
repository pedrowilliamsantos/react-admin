import "./dataTable.scss"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { userRows, userColumns } from "../../data";
import { Link } from "react-router-dom";

const DataTable = () => {

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${params.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid actionColumn className="dataGrid"
        rows={userRows} //puxando os dados do banco 'data.jsx'
        columns={[...userColumns, actionColumn]} 
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slotProps={{
          toolbar:{
            showQuickFilter:true,
            quickFilterProps:{debounceMs:500}
          }
        }}
        slots={{
          toolbar:GridToolbar
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable