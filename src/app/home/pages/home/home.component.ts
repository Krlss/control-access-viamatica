import { Component } from '@angular/core';
import { VisitorService } from '../../services/visitor.service';
import { ResidentService } from '../../../resident/services/resident.service';
import { Visitor } from '../../interfaces/visitor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  visitors: Visitor[] = [];

  constructor(private visitorService: VisitorService) {}

  ngOnInit() {
    this.visitors = this.visitorService.getVisitors();
  }

  deleteVisitor(index: number) {
    this.visitorService.deleteVisitor(index);
    this.visitors = this.visitorService.getVisitors();
  }
}
