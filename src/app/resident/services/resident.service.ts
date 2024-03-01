import { Injectable } from '@angular/core';
import { Resident } from '../interfaces/resident';

@Injectable({
  providedIn: 'root',
})
export class ResidentService {
  constructor() {}

  getResident (email: string, password: string) {
    const residents = this.getResidents();
    return residents.find((resident: Resident) => resident.correo === email && resident.contraseña === password);
  }

  getResidents() {
    const residents = localStorage.getItem('residents');
    if (residents) {
      return JSON.parse(residents);
    }
    return [];
  }

  register(resident: Resident) {
    const residents = this.getResidents();

    if(residents.some((r: Resident) => r.identificacion === resident.identificacion || resident.correo === r.correo)) {
      throw new  Error('El residente ya existe');
    }

    residents.push(resident);
    localStorage.setItem('residents', JSON.stringify(residents));
  }
}
