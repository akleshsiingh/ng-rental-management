import { Subcategory, Category, Branch, Location } from './../../model/location.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentService } from 'src/app/service/equipment.service';
import { BaseComponent } from 'src/app/base.component';
import { CONST } from './../../CONST';

@Component({
  selector: 'app-sub-catalog',
  templateUrl: './sub-catalog.component.html',
  styleUrls: ['./sub-catalog.component.scss']
})
export class SubCatalogComponent extends BaseComponent implements OnInit {

  _subCategories: Subcategory[] = [];
  _selectedCategoryName = '';
  private _dealerId = "";
  private _branchId = "";
  private _categoryId = -1
  constructor(private _router: Router, private _route: ActivatedRoute,
    private _equip: EquipmentService) {
    super();
  }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      const { dealerId, branchId, id } = params;
      this._dealerId = dealerId;
      this._branchId = branchId;
      this._categoryId = id;
      if (this._dealerId && this._branchId && this._categoryId != -1) {

        this.getSubCategory();


      }
    });
  }

  getSubCategory() {
    this._equip.getLocations().pipe(this.takeUntil$)
      .subscribe((response: any) => {
        if (response.status === CONST.SUCCESS) {
          const { locations } = response.data;

          const location = locations.find((l: Location) => l.dealers_id === this._dealerId);
          const branch = location?.branches.find((b: Branch) => b.branch_id === this._branchId);
          if (branch) {
            const category = branch.categories[this._categoryId];
            this._selectedCategoryName = category.name;
            this._subCategories = category.subcategories.filter((sc: Subcategory) => sc.image && sc.name);

          }
        }
      }, e => {
        console.error(e);
      });
  }

  goBackToCategory() {
    this._router.navigate([this._dealerId, this._branchId]);
  }

}
