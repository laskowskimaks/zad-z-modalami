import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrainiacsRoutingModule } from './brainiacs-routing.module';



@NgModule({
  declarations: [
    TableComponent,
    RowComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BrainiacsRoutingModule
  ],
  exports: [
    TableComponent
  ]
})
export class BrainiacsModule { }
