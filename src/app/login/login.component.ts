import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../types/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit {
 
    name:string=''
    email:string=''
    password:string=''
    confirmPassword:string=''
    showSigup:boolean = false
    currentUser:User| null = null;

  

  constructor(
    private authService:AuthService,
    private router: Router
  ){
   

  }

    ngOnInit(): void {
   

      

    }

   handleLogin(){//subscribe observação dos valores emitidos pelo objeto observable
    this.authService.signin(this.email,this.password).subscribe((isLogged)=>{
      if(isLogged){
      console.log('Usuário logado com sucesso');
      this.router.navigate(['/'])
        // Realizar a navegação ou outras ações após o login bem-sucedido
      } else {
        console.log('Erro ao fazer login');
        // Exibir mensagem de erro para o usuário
      }

    })


    

  }

  handleCadastrar(){//name:string,email:string,password:string,confirmPassword:string
    this.authService.register(this.name,this.email,this.password,this.confirmPassword).subscribe()

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
