import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponentTestingComponent } from './basic-component-testing.component';

const routes: Routes = [{ path: '', component: BasicComponentTestingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicComponentTestingRoutingModule { }
