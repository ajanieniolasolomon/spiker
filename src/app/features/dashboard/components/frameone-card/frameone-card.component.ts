import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frameone-card',
  imports: [CommonModule],
  templateUrl: './frameone-card.component.html',
})
export class FrameoneCardComponent {
  /**
   * The main title of the card.
   */
  @Input() title: string = 'Loremipsumdolorsit';

  @Input() subtitle: string = '192.168.1.1';

  @Input() hasWarning: boolean = true;

  @Input() infoLabel: string = 'Lorem:';

  @Input() infoTextPrimary: string = 'Lorem';

  @Input() infoTextSecondary: string = '"Ipsum"';

  @Input() dataLabel: string = 'Loremipsum';

  @Input() dataValuePrimary: string = 'Lorem';

  @Input() dataValueSecondary: string = '1234,5678';
}
