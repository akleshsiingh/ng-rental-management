import { CatalogComponent } from './catalog/catalog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubCatalogComponent } from './sub-catalog/sub-catalog.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: CatalogComponent },
      { path: ':dealerId/:branchId', component: CatalogComponent },
      { path: ':dealerId/:branchId/:id', component: SubCatalogComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
