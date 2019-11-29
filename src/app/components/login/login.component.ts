import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  user: User = {
    username: '',
    password: '',
    firstname: '',
    surename: '',
    email: '',
  };
  res: object;

  constructor(private userLogin: UserService, private router: Router) { }

  login() {
    this.userLogin.login(this.user).subscribe(res => {
     
      this.res = res;
      this.userLogin.setUser(res['user'])
      localStorage.setItem('token', res['token'])

      setTimeout(() => {
        this.router.navigate(['/profile/id'])
      }, 300);
    })
  }
}
