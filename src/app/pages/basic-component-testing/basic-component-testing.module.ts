import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicComponentTestingRoutingModule } from './basic-component-testing-routing.module';
import { BasicComponentTestingComponent } from './basic-component-testing.component';

@NgModule({
  declarations: [BasicComponentTestingComponent],
  imports: [CommonModule, BasicComponentTestingRoutingModule, RouterModule],
})
export class BasicComponentTestingModule {}
