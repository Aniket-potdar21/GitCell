import { Component, OnInit, ViewChild   } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { CustomizedCellComponent } from './customized-cell/customized-cell.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;

  title = 'my-app';
  rowData: any;
  private frameworkComponents;
  private columnDefs;
  private gridApi;
  private gridColumnApi;
  private rowNode;


constructor(private http: HttpClient) {

}

ngOnInit() {
  // this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');

  this.columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true, rowDrag: true },
    {headerName: 'Model', field: 'model', sortable: true, filter: true },
    {headerName: 'Price', field: 'price', sortable: true, filter: true, cellrenderer: 'CustomizedPriceCell'},
];

  // this.frameworkComponents = {
  //   CustomizedPriceCell: CustomizedCellComponent,
  //   };


}
// getSelectedRows() {
//   const selectedNodes = this.agGrid.api.getSelectedNodes();
//   const selectedData = selectedNodes.map( node => node.data );
//   const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model + ' ' + node.price).join('\n ');
//   alert(`Selected nodes:\n ${selectedDataStringPresentation}`);
//   }
getSelectedRows() {
  this.rowNode = this.gridApi.getDisplayedRowAtIndex(0);
  alert(this.rowNode.data.make + ' ' + this.rowNode.data.model + ' ' + this.rowNode.data.price);
}

  onGridReady(params: any) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      this.http.get('https://api.myjson.com/bins/15psn9')
      .subscribe(data => {
        params.api.setRowData(data);
      });
  }

  onRowValueChanged(param: any) {
    console.log(param);
    console.log(param.data);
    const gridData = this.getAllData();
 }
 getAllData() {
  const rowData = [];
  this.gridApi.forEachNode(node => rowData.push(this.rowNode.data));
  return rowData;
}

}
