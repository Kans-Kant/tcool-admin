import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : any[] = [];
  checkUsers : any[] = [];

  constructor(
    private userService : UserService,
    private dataService : DataStorageService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (data)=>{
        this.users = data;
      }
    )
  }

  sendCheckedUsers(): void {
    const users = this.users.filter( (user) => user.checked );
    if((users!==null)&&(users!==undefined)){
      this.dataService.setUsers(users);
      this.router.navigate(['../message'],{ relativeTo: this.route });
    }
  }

}
