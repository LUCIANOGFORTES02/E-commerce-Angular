import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
 
    name:string=''
    email:string=''
    password:string=''
    confirmPassword:string=''
    showSigup:boolean = false
  

  constructor(
    private authService:AuthService
  ){}

  handleLogin(){
    this.authService.signin(this.email,this.password)

  }

  handleCadastrar(){//name:string,email:string,password:string,confirmPassword:string
    this.authService.register(this.name,this.email,this.password,this.confirmPassword)

  }
  handleTelaCadastro(event:Event){
    event.preventDefault();

    this.showSigup=!this.showSigup
    this.name=""
    this.email=""
    this.password=""
    this.confirmPassword=""

   
  }





}
