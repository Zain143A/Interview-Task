import React from 'react'
import DataTable from 'react-data-table-component'
function DataTabs({columns,data}) {
  return (
    <div style={{zIndex:"-10"}}>

    <DataTable
        columns={columns}
        data={data}
        pagination
        />
        
  </div>
  )
}

export default DataTabs