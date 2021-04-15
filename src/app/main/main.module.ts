import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ShareModule } from '../share/share.module';
import { SubCatalogComponent } from './sub-catalog/sub-catalog.component';


@NgModule({
  declarations: [DashboardComponent, CatalogComponent, MainNavComponent, SubCatalogComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ShareModule
  ]
})
export class MainModule { }
