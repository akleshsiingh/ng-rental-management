import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Injectable()
export abstract class BaseComponent implements OnDestroy {
  private _subject$ = new Subject<boolean>();
  constructor() { }

  get takeUntil$() {
    return takeUntil(this._subject$);
  }

  ngOnDestroy(): void {
    this._subject$.next(true);
    this._subject$.complete();
  }
}
