import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ListItem {
  label: string;
  value: string;
  hasCheckmark?: boolean;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() items: ListItem[] = [];
}


