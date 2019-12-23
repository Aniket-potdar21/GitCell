import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-customized-cell',
  templateUrl: './customized-cell.component.html',
  styleUrls: ['./customized-cell.component.scss']
})
export class CustomizedCellComponent implements OnInit, ICellRendererAngularComp {

private cellvalue: any;


  constructor() { }

  ngOnInit() {
  }

  refresh(param: any): boolean {
    this.cellvalue = param.value;
    return true;
  }
agInit(param: any) {
    this.cellvalue = param.value;
}



}
