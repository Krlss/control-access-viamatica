import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResidentService } from '../../resident/services/resident.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth = false;

  constructor(private residentService: ResidentService) {
    const auth = localStorage.getItem('auth-cont-access-token');
    if (auth) {
      this._auth = true;
    }
  }

  isAuthenticated() {
    return this._auth;
  }

  login(email: string, password: string) {
    this._auth = this.residentService.getResident(email, password);
    if (this._auth) {
      localStorage.setItem('auth-cont-access-token', 'true');
    }
    return this._auth;
  }

  logout() {
    this._auth = false;
    localStorage.removeItem('auth-cont-access-token');
  }
}
