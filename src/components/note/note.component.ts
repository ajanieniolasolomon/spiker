import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule], // Required for *ngIf
  templateUrl: './note.component.html',
})
export class NoteComponent {
  /**
   * The main title of the note section.
   */
  @Input() title: string = '';

  /**
   * The optional subtitle or body text.
   * The '?' makes this input optional.
   */
  @Input() subtitle?: string;
}