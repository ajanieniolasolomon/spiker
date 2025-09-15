import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DataLineItem {
  type: 'text' | 'tag';
  value: string;
}

@Component({
  selector: 'app-frametwo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frametwo-card.component.html',
})
export class FrametwoCardComponent {
  @Input() title: string = 'Loremipsu';
  @Input() infoLineLabel: string = 'Lorem:';
  @Input() infoLineText: string = 'Loremipsum Loremipsum';
  @Input() infoLineVersion: string = '1.2.3.4';
  @Input() dataLineItems: DataLineItem[] = [
    { type: 'tag', value: '1.2.3.4' },
    { type: 'text', value: 'Loremipsum' },
    { type: 'tag', value: '1.2.3.4' },
    { type: 'tag', value: '1.2.3.4' },
  ];
}


