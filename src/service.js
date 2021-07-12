import { DataTable } from '@scuf/datatable';
import '@scuf/datatable/honeywell/theme.css'
import React from 'react'
import { Notification, Icon } from '@scuf/common';
const data = [{plane: 's-1', pilot: 'AAron Davis', status: 'Retired', flights: 2}, {plane: 'f-1', pilot: 'Garven Dresis', status: 'Retired', flights: 10}, {plane: '6-t', pilot: 'David JP', status: 'Retired', flights: 9}];

    export default class DataTableExample extends React.Component {
        constructor() {
            super();
            this.state = {
                expandedRows: [data[0]],
            };
            this.expanderTemplate = this.expanderTemplate.bind(this);
            this.toggleExpand = this.toggleExpand.bind(this);
        }

        rowExpansionTemplate(data){
            return  <Notification hasIcon={true} severity="information" style={{margin: 0}}>This Pilot has flown {data.flights} flights</Notification>;
        }

        expanderTemplate(data){
            const open = this.state.expandedRows.includes(data.rowData);
            return  <div onClick={() => this.toggleExpand(data.rowData, open)}><Icon root="common" name={open ?  'caret-down' : 'caret-right'}/></div>;
        }

        toggleExpand(data, open){
            let expanded = this.state.expandedRows;
            if(open){
                let index = expanded.findIndex((item) => JSON.stringify(item) ===  JSON.stringify(data));
                expanded.splice(index, 1)
            } else {
                expanded.push(data);
            }
            this.setState({expandedRows: expanded});
        }

        render(){
            return (
           
           <DataTable
                data={data}
                expandedRows={this.state.expandedRows}
                rowExpansionTemplate={this.rowExpansionTemplate}
            >
                <DataTable.Column initialWidth="3rem" field="plane" header="Show" renderer={this.expanderTemplate}/>
                <DataTable.Column field="plane" header="Plane" />
                <DataTable.Column field="pilot" header="Pilot" />
                <DataTable.Column field="status" header="Status"/>
                <DataTable.Column field="flights" header="Flights"/>
            </DataTable>
        );
    }
}
