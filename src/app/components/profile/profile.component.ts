import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  
  user: any 
  
  dataLocalStorage: any;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.dataLocalStorage= localStorage.getItem('user')
    this.user = JSON.parse(this.dataLocalStorage)
    this.userService.profile(this.user.id).subscribe(
      res => this.user = res,
      error => console.log(error) 
    )
  }
}
