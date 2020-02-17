import {Component, Input, OnInit} from '@angular/core';
import {UserManagementService} from '../../../api-management/services/user-management/user-management.service';
import {Vendor} from '../../../../models/vendor';

@Component({
  selector: 'app-profile-essentials',
  templateUrl: './profile-essentials.component.html',
  styleUrls: ['./profile-essentials.component.scss']
})
export class ProfileEssentialsComponent implements OnInit {
  user: Vendor;

  constructor(private userManagementService: UserManagementService) { }

  ngOnInit() {
    this.userManagementService.getVendorProfile().subscribe((vendors) => {
      this.user = vendors[0];
    });
  }

  increaseCredit(value: number) {
    this.userManagementService.increaseUserCredit(value).subscribe(() => {
      window.location.reload();
    });
  }
}
