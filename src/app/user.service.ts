import { Injectable } from '@angular/core';
import { User } from './user/interface/user-interface';
import { users } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[] = users;

  constructor() { }

  getUser(id:string):User{
    const userFound = users.find((user)=>user.id===id);
    console.log(userFound);
    if(userFound)
      return userFound;
    else
      return users[0];
  }
}
