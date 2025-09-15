import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note.component.html',
})
export class NoteComponent {
  @Input() title: string = '';
  @Input() subtitle?: string;
}


