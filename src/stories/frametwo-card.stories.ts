import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FrametwoCardComponent } from '../app/features/dashboard/components/frametwo-card/frametwo-card.component';

export default {
  title: 'Components/FrameTwoCard',
  component: FrametwoCardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    title: { control: 'text' },
    infoLineLabel: { control: 'text' },
    infoLineText: { control: 'text' },
    infoLineVersion: { control: 'text' },
    dataLineItems: { control: 'object' },
  },
} as Meta<FrametwoCardComponent>;

type Story = StoryObj<FrametwoCardComponent>;

// Default story that matches the image
export const Default: Story = {
  args: {
    title: 'Loremipsu',
    infoLineLabel: 'Lorem:',
    infoLineText: 'Loremipsum Loremipsum',
    infoLineVersion: '1.2.3.4',
    dataLineItems: [
      { type: 'tag', value: '1.2.3.4' },
      { type: 'text', value: 'Loremipsum' },
      { type: 'tag', value: '1.2.3.4' },
      { type: 'tag', value: '1.2.3.4' },
    ],
  },
};

// Story with a different data structure to show flexibility
export const AnotherExample: Story = {
  args: {
    title: 'Active Service',
    infoLineLabel: 'Status:',
    infoLineText: 'All systems operational on version',
    infoLineVersion: 'v2.5.1',
    dataLineItems: [
      { type: 'text', value: 'Patched:' },
      { type: 'tag', value: 'v2.5.0' },
      { type: 'text', value: 'Next:' },
      { type: 'tag', value: 'v2.6.0' },
    ],
  },
};
