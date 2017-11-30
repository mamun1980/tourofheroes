import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule],
  declarations: []
})
export class MaterialModule { }
