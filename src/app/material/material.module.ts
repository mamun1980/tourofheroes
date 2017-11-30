import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule, FlexLayoutModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatGridListModule,
    MatSidenavModule, MatInputModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatSidenavModule, MatGridListModule, MatInputModule,
    FlexLayoutModule
  ]
})
export class MaterialModule { }
