import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentWithServiceRoutingModule } from './component-with-service-routing.module';
import { ComponentWithServiceComponent } from './component-with-service.component';

@NgModule({
  declarations: [ComponentWithServiceComponent],
  imports: [CommonModule, ComponentWithServiceRoutingModule, RouterModule],
})
export class ComponentWithServiceModule {}
