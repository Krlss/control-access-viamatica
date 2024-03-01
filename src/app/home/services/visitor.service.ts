import { Injectable } from '@angular/core';
import { Visitor } from '../interfaces/visitor';

@Injectable({
  providedIn: 'root',
})
export class VisitorService {
  constructor() {}

  getVisitors(): Visitor[] {
    return JSON.parse(localStorage.getItem('visitors') || '[]');
  }

  register(visitor: Visitor) {
    const visitors = this.getVisitors();
    visitors.push(visitor);
    localStorage.setItem('visitors', JSON.stringify(visitors));
  }

  deleteVisitor(index: number) {
    const visitors = this.getVisitors();
    visitors.splice(index, 1);
    localStorage.setItem('visitors', JSON.stringify(visitors));
  }
}
