import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vulnerabilities-card',
  templateUrl: './vulnerabilities-card.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class VulnerabilitiesCardComponent {
  @Input() title: string = 'Lorem Ipsum Dolor Sit';
  @Input() vulnerableVersions: string[] = [
    '1.2.3.4',
    '1.2.3.4',
    '1.2.3.4',
    '1.2.3.4',
    '1.2.3.4',
    '1.2.3.4',
  ];
  @Input() patchedVersionLabel: string = 'Lorem';
  @Input() patchedVersion: string = '1.2.3.4';
}


