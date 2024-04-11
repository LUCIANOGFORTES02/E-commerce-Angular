import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree,Router } from '@angular/router';

import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> 
  | boolean 
  | UrlTree=> {

  return inject(AuthService).authenticated()//Se estiver logado retorna true se não estiver retorna false e vai para tela de login
  ? true
  : inject(Router).createUrlTree(['/login']);

};
