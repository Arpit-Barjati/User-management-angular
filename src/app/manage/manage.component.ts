import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user/interface/user-interface';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  users!:User[];

  constructor(private userService : UserService){
    this.users = this.userService.users;
  }

}
