import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {
  private buttonClick = true;
  showDropdown: boolean;
  @Input() dropdownBtnClass = ['dropdown-button'];
  @Input() dropdownListClass = ['dropdown-list'];
  @Input() dropdownList: string[];
  @Input() buttonContent: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}

  onClickOver(event: any) {
    if (!this.buttonClick) {
      this.showDropdown = !event;
      this.buttonClick = true;
    } else {
      this.buttonClick = false;
    }
  }
}
