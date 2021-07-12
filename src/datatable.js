import { DataTable } from '@scuf/datatable';
import React, { useState, useEffect, useCallback } from 'react'
import '@scuf/datatable/honeywell/theme.css'
//import React from 'react'
import { Notification, Icon } from '@scuf/common';
//const data = [{plane: 's-1', pilot: 'AAron Davis', status: 'Retired', flights: 2}, {plane: 'f-1', pilot: 'Garven Dresis', status: 'Retired', flights: 10}, {plane: '6-t', pilot: 'David JP', status: 'Retired', flights: 9}];
const devices = [{
    alias: 'ct40987654321',
    type: 'Mobile Computer',
    model: 'ct40',
    serialNumber: '987654321',
    folder: null,
    DeviceLicenses: [
      {
        FeatureName: 'clientpack.maint.d',
        ExpiresOn: '12/31/2022',
        MaintenanceExpiry: '12/31/2022'
      }
    ],
    status: false
  },
  {
    alias: 'ct4098765432451',
    type: 'Mobile Computer',
    model: 'ct40',
    serialNumber: '98765432451',
    folder: null,
    DeviceLicenses: [
      {
        FeatureName: 'clientpack.maint.d',
        ExpiresOn: '12/31/2022',
        MaintenanceExpiry: '12/31/2022'
      }
    ],
    status: false
  },
  {
    alias: 'ct45987654324451',
    type: 'Mobile Computer',
    model: 'ct45',
    serialNumber: '987654324451',
    folder: null,
    DeviceLicenses: [
      {
        FeatureName: 'clientpack.maint.d',
        ExpiresOn: '12/31/2022',
        MaintenanceExpiry: '12/31/2022'
      }
    ],
    status: false
  },
  {
    alias: 'ct4546734734',
    type: 'Mobile Computer',
    model: 'ct45',
    serialNumber: '46734734',
    folder: null,
    DeviceLicenses: [
      {
        FeatureName: 'clientpack.maint.d',
        ExpiresOn: '12/31/2022',
        MaintenanceExpiry: '12/31/2022'
      }
    ],
    status: false
  }
]
    const DataTableExample = ()  => {
      const [expandedRows, setExpandedRows] = useState([])

      function Render ({ value }) {
        return <p>{value}</p>
      }

        function rowExpansionTemplate(data){
            //return  <Notification hasIcon={true} severity="information" style={{margin: 0}}>This Pilot has flown {data.flights} flights</Notification>;
            console.log(devices)
    console.log(data.DeviceLicenses)
    const columns = [
          { field: 'FeatureName', header: 'Feature Name', initialWidth: '40%', render: Render },
          { field: 'ExpiresOn', header: 'Expires On', initialWidth: '30%', render: Render },
          { field: 'MaintenanceExpiry', header: 'Maintenance Expiry', initialWidth: '30%', render: Render }
        ]
        return (
              <DataTable
                //loading={loading}
                data={data.DeviceLicenses}
                searchPlaceholder='Search for software'
                scrollHeight='25vh'
                scrollable={true}
    
              >
                {columns
                  .map(key =>
                    <DataTable.Column
                      key={key.field}
                      field={key.field}
                      initialWidth={key.initialWidth}
                      renderer={key.render}
                      header={key.header}
                      sortable={true}
                    />)}
              </DataTable>
        )
        }

        function expanderTemplate(data){
            const open = expandedRows.includes(data.rowData)
            return  <div onClick={() => toggleExpand(data.rowData, open)}><Icon root="common" name={open ?  'caret-down' : 'caret-right'}/></div>;
        }

        function toggleExpand(data, open){
            let expanded = [...expandedRows]
            if(open){
                let index = expanded.findIndex((item) => JSON.stringify(item) ===  JSON.stringify(data))
                expanded.splice(index, 1)
            } else {
                expanded.push(data);
            }
            setExpandedRows(expanded)
        }

        
            return (
           
           <DataTable
                data={devices}
                expandedRows={expandedRows}
                rowExpansionTemplate={rowExpansionTemplate}
            >
                <DataTable.Column initialWidth="3rem" field="plane" header="Show" renderer={expanderTemplate}/>
                <DataTable.Column field="alias" header="Plane" />
                <DataTable.Column field="type" header="Pilot" />
                <DataTable.Column field="model" header="Status"/>
                <DataTable.Column field="serialNumber" header="Flights"/>
            </DataTable>
        )
    
}
export default DataTableExample