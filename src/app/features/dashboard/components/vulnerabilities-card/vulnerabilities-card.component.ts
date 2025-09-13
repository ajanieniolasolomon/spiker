import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vulnerabilities-card',
  templateUrl: './vulnerabilities-card.component.html',
    standalone: true,
  imports: [CommonModule],

})
export class VulnerabilitiesCardComponent {
  /**
   * The main title for the vulnerability section.
   */
  @Input() title: string = 'Lorem Ipsum Dolor Sit';

  /**
   * An array of strings representing the vulnerable versions.
   */
  @Input() vulnerableVersions: string[] = [
    '1.2.3.4',
    '1.2.3.4',
    '1.2.3.4',
    '1.2.3.4',
    '1.2.3.4',
    '1.2.3.4',
  ];

  /**
   * The label for the patched version information.
   */
  @Input() patchedVersionLabel: string = 'Lorem';

  /**
   * The version number that contains the fix.
   */
  @Input() patchedVersion: string = '1.2.3.4';
}
