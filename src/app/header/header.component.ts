import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../types/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  currentUser:User| null = null ;

  constructor(private authService : AuthService){
   
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser)
        })
      
      }

      
  

  handleLogout(){
    this.authService.signup();
    window.location.href = window.location.href

      
  }



}
