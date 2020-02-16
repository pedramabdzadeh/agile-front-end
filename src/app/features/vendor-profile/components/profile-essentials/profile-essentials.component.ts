import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-essentials',
  templateUrl: './profile-essentials.component.html',
  styleUrls: ['./profile-essentials.component.scss']
})
export class ProfileEssentialsComponent implements OnInit {
  editTitle: boolean;
  @Input() title = 'شرکت نینتندو';

  constructor() { }

  ngOnInit() {
  }

}
