import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define a type for the status to ensure type safety and provide clear options
export type StatusType = 'error' | 'warning' | 'success';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule], // Required for *ngIf and ngClass
  templateUrl: './status.component.html',
})
export class StatusComponent {
  /**
   * The primary text label for the status.
   */
  @Input() title: string = 'Lorem';

  /**
   * Optional smaller text that appears below the title.
   */
  @Input() subtitle?: string;

  /**
   * The type of status, which determines the color and icon.
   */
  @Input() status: StatusType = 'success';

  /**
   * A map to easily resolve the correct Tailwind CSS classes for each status.
   * The hex codes are chosen to perfectly match the colors in the image.
   */
  statusClasses = {
    error: {
      iconBg: 'bg-[#D9534F]',
      text: 'text-[#D9534F]',
    },
    warning: {
      iconBg: 'bg-[#F0AD4E]',
      text: 'text-[#F0AD4E]',
    },
    success: {
      iconBg: 'bg-[#5CB85C]',
      text: 'text-[#5CB85C]',
    },
  };

  get currentStatusClasses() {
    return this.statusClasses[this.status];
  }
}