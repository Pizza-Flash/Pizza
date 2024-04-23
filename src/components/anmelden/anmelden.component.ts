import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anmelden',
  templateUrl: './anmelden.component.html',
  styleUrls: ['./anmelden.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class AnmeldenComponent implements OnInit {
  signupUser: any[] = [];
  signupObj: any = {
    username: '',
    email: '',
    passwort: ''
  };
  loginObj: any = {
    username: '',
    passwort: ''
  };
  constructor() {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers')
    if(localData !=null) {
      this.signupUser = JSON.parse(localData)
    }
  }
  onSignUp() {
this.signupUser.push(this.signupObj)
localStorage.setItem('signUpUsers', JSON.stringify(this.signupUser))
this.  signupObj = {
  username: '',
  email: '',
  passwort: ''

  };
  alert('Erfolgreich Registiert!')
}
  onLogin() {
    const isUserExist = this.signupUser.find(m => m.username == 
      this.loginObj.username && m.passwort  == 
      this.loginObj.passwort);
      if (isUserExist != undefined) {
        alert('Log In Erfolgreich')
      }
      else alert('Benutzername oder Passwort sind Falsch!')
  }

}