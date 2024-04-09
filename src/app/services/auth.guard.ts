import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {//Determinar se uma rota pode ser ativada

  

  return true;

  // Vou verificar o token 
  //if token  retorna true 
  //Else tela de logi 

  
};
