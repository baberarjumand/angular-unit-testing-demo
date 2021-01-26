import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'basic-component-testing',
    loadChildren: () =>
      import(
        './pages/basic-component-testing/basic-component-testing.module'
      ).then((m) => m.BasicComponentTestingModule),
  },
  {
    path: 'component-with-service',
    loadChildren: () =>
      import(
        './pages/component-with-service/component-with-service.module'
      ).then((m) => m.ComponentWithServiceModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
