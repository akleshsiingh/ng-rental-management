import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Branch, Location } from 'src/app/model/location.model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @Input('locations') _locations: Location[] = [];
  _selectedIndex = -1;
  _showDropDown = false;
  constructor( private _router: Router) { }

  ngOnInit(): void {
  }

  showMoreOptions(index: number) {
    if (this._selectedIndex === index) {
      this._selectedIndex = -1;
    } else {
      this._selectedIndex = index;
    }
  }

  selectCategory(event: any, dealersId: string, branch: Branch) {
    event.stopPropagation();
    this._router.navigate([dealersId, branch.branch_id]);
    this._selectedIndex = -1;
    this._showDropDown = false;
  }

  goToHome(){
    this._router.navigateByUrl("");
  }

}
