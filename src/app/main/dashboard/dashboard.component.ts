
import { BaseComponent } from 'src/app/base.component';
import { Component, OnInit } from '@angular/core';
import { CONST } from 'src/app/CONST';
import { EquipmentService } from 'src/app/service/equipment.service';
import { Location } from 'src/app/model/location.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {

  public _locations: Location[] = [];
  constructor(private _equip: EquipmentService) {
    super();
  }

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations() {
    this._equip.getLocations().pipe(this.takeUntil$)
      .subscribe((response: any) => {
        if (response.status === CONST.SUCCESS) {
          const { locations } = response.data;
          this._locations = locations;
        }
      }, e => {
        console.error(e);
      });
  }

}
