import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define a type for the list items to ensure type safety and clean code
export interface ListItem {
  label: string;
  value: string;
  hasCheckmark?: boolean; // Optional property for the green checkmark
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule], // Required for *ngFor and *ngIf
  templateUrl: './list.component.html',
})
export class ListComponent {
  /**
   * An array of objects, where each object represents a row in the list.
   */
  @Input() items: ListItem[] = [];
}
