import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
})
export class FilterMenuComponent {
  selectedRadioBtn: string;
  @Input() totalCount: number;
  @Input() femaleCount: number;
  @Input() maleCount: number;
  @Input() otherGendersCount: number;
  @Output() genderInputChange: EventEmitter<string>;

  constructor() {
    this.selectedRadioBtn = 'all';
    this.totalCount = 0;
    this.femaleCount = 0;
    this.maleCount = 0;
    this.otherGendersCount = 0;

    this.genderInputChange = new EventEmitter<string>();
  }

  handleGenderInputChange() {
    this.genderInputChange.emit(this.selectedRadioBtn);
  }
}
