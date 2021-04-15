import { CONST } from './../../CONST';
import { SimpleResponse } from './../../response/simple.response';
import { EquipmentService } from './../../service/equipment.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch, Category, Location } from 'src/app/model/location.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent extends BaseComponent implements OnInit {

  _categories: Category[] = [];
  private _dealerId = "";
  private _branchId = "";
  constructor(private _route: ActivatedRoute, private _equip: EquipmentService, private _router: Router) {
    super();
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      const { dealerId, branchId } = params;
      this._dealerId = dealerId;
      this._branchId = branchId;
      if (this._dealerId && this._branchId) {
        this.getCategory();
      }
    });
  }

  private getCategory() {
    this._equip.getLocations().pipe(this.takeUntil$)
      .subscribe((response: any) => {
        if (response.status === CONST.SUCCESS) {
          const { locations } = response.data;

          const location = locations.find((l: Location) => l.dealers_id === this._dealerId);
          const branch = location?.branches.find((b: Branch) => b.branch_id === this._branchId);
          if (branch) {
            this._categories = branch.categories;
          }
        }
      }, e => {
        console.error(e);
      });
  }

  openCategories(index: number) {
    this._router.navigate([this._dealerId, this._branchId, index]);
  }



}
