import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remediation-card',
  templateUrl: './remediation-card.component.html',
  styleUrl: './remediation-card.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class RemediationCardComponent {
  @Input() title: string = 'Server';
  @Input() header: string = 'Server';
  @Input() defaultText: string = 'Lorem Ipsum Dolor Sit Amet Consectetur.';
  @Input() expandableText: string =
    'Lorem Ipsum Dolor Sit Amet Consectetur. Nunc Vitae Tortor Convallis Vitae Arcu. Magna.';
  @Output() cardClicked = new EventEmitter<void>();

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
    this.cardClicked.emit();
  }
}
