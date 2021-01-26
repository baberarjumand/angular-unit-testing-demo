import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentWithServiceComponent } from './component-with-service.component';

const routes: Routes = [{ path: '', component: ComponentWithServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentWithServiceRoutingModule { }
