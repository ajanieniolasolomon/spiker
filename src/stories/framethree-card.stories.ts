import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FramethreeCardComponent } from '../../projects/spiker-lib/src/lib/framethree-card/framethree-card.component';
import type { ContentBlock } from '../../projects/spiker-lib/src/lib/framethree-card/framethree-card.component';

export default {
  title: 'Components/FrameThreeCard',
  component: FramethreeCardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    title: { control: 'text' },
    contentBlocks: { control: 'object' },
  },
} as Meta<FramethreeCardComponent>;

type Story = StoryObj<FramethreeCardComponent>;

// This is the data required to perfectly replicate the image
const defaultBlocks: ContentBlock[] = [
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

// Default story that matches the image
export const Default: Story = {
  args: {
    title: 'Loremipsum',
    contentBlocks: defaultBlocks,
  },
};

// Story with only one block to show flexibility
export const SingleBlock: Story = {
  args: {
    title: 'Single Item View',
    contentBlocks: [defaultBlocks[0]], // Just use the first block from the default data
  },
};
