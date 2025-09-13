import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define the types for items that can appear in a line
export type LineItemType = 'text' | 'yellow-tag' | 'green-tag' | 'purple-tag' | 'blue-tag';

export interface LineItem {
  type: LineItemType;
  value: string;
  // Optional secondary value for tags like "Lorem" "Ipsum"
  secondaryValue?: string;
}

// Define the structure for a single content block
export interface ContentBlock {
  infoLineItems: LineItem[];
  dataLineItems: LineItem[];
}

@Component({
  selector: 'app-framethree-card',
  imports: [CommonModule],
  templateUrl: './framethree-card.component.html',
})
export class FramethreeCardComponent {
  /**
   * The main title next to the server icon.
   */
  @Input() title: string = 'Loremipsum';

  /**
   * An array of content blocks to be rendered.
   * Each block contains an info line and a data line.
   */
  @Input() contentBlocks: ContentBlock[] = [
    // Default data to match the first block in the image
    {
      infoLineItems: [
        { type: 'yellow-tag', value: 'Lorem', secondaryValue: '"Ipsum"' },
        { type: 'green-tag', value: 'Lorem' },
        { type: 'text', value: 'Loremipsum Loremipsum' },
      ],
      dataLineItems: [
        { type: 'purple-tag', value: '1.2.3.4' },
        { type: 'text', value: 'Loremipsum' },
        { type: 'purple-tag', value: '1.2.3.4' },
        { type: 'purple-tag', value: '1.2.3.4' },
        { type: 'blue-tag', value: 'Lorem', secondaryValue: '1234,5678' },
      ],
    },
    // Default data to match the second block in the image
    {
      infoLineItems: [
        { type: 'yellow-tag', value: 'Lorem', secondaryValue: '"Ipsum"' },
        { type: 'text', value: 'Loremipsum Loremipsum' },
      ],
      dataLineItems: [
        { type: 'purple-tag', value: '1.2.3.4' },
        { type: 'purple-tag', value: '1.2.3.4' },
        { type: 'text', value: 'Loremipsum Loremipsum' },
        { type: 'purple-tag', value: '1.2.3.4' },
        { type: 'purple-tag', value: '1.2.3.4' },
      ],
    },
  ];
}
