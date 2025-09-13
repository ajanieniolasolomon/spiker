import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

/**
 * Defines the structure for an item in the data line,
 * which can be either plain text or a styled tag.
 */
export interface DataLineItem {
  type: 'text' | 'tag';
  value: string;
}

@Component({
  selector: 'app-frametwo-card',
  imports: [CommonModule],
  templateUrl: './frametwo-card.component.html',
})
export class FrametwoCardComponent {
  /**
   * The main title next to the server icon.
   */
  @Input() title: string = 'Loremipsu';

  /**
   * The label for the middle info line (e.g., "Lorem:").
   */
  @Input() infoLineLabel: string = 'Lorem:';

  /**
   * The plain text part of the info line.
   */
  @Input() infoLineText: string = 'Loremipsum Loremipsum';

  /**
   * The version number in the tag on the info line.
   */
  @Input() infoLineVersion: string = '1.2.3.4';

  /**
   * An array of items to display in the bottom row.
   * Each item specifies its type ('text' or 'tag') and its value.
   */
  @Input() dataLineItems: DataLineItem[] = [
    { type: 'tag', value: '1.2.3.4' },
    { type: 'text', value: 'Loremipsum' },
    { type: 'tag', value: '1.2.3.4' },
    { type: 'tag', value: '1.2.3.4' },
  ];
}
