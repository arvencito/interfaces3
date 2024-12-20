import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(codigo: string, fechaNacimiento: string): boolean {
    if (codigo === 'SM72257696' && fechaNacimiento === '04052004') {
      sessionStorage.setItem('codigo', codigo);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('codigo');
  }

  logout(): void {
    sessionStorage.removeItem('codigo');
  }
}
