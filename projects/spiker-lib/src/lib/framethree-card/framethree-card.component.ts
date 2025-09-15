import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type LineItemType = 'text' | 'yellow-tag' | 'green-tag' | 'purple-tag' | 'blue-tag';

export interface LineItem {
  type: LineItemType;
  value: string;
  secondaryValue?: string;
}

export interface ContentBlock {
  infoLineItems: LineItem[];
  dataLineItems: LineItem[];
}

@Component({
  selector: 'app-framethree-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './framethree-card.component.html',
})
export class FramethreeCardComponent {
  @Input() title: string = 'Loremipsum';
  @Input() contentBlocks: ContentBlock[] = [
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


