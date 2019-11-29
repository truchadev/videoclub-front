import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user: User = {
    username:'',
    firstname:'',
    surename:'',
    email:'',
    password:''
  }

  constructor( private userRegister: UserService) {


  }

  register(){
    this.userRegister.register(this.user).subscribe( res => console.log('Usuario creado'))
  }


}
