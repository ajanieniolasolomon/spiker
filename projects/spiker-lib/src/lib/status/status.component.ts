import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type StatusType = 'error' | 'warning' | 'success';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
})
export class StatusComponent {
  @Input() title: string = 'Lorem';
  @Input() subtitle?: string;
  @Input() status: StatusType = 'success';

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


