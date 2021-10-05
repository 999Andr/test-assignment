import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
export const routes: Routes = [
  { path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then(m =>  m.CustomersModule)
  }
];
@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }