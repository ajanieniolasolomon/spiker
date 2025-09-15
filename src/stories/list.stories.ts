import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../../projects/spiker-lib/src/lib/list/list.component';
import type { ListItem } from '../../projects/spiker-lib/src/lib/list/list.component';

export default {
  title: 'Components/List',
  component: ListComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    items: {
      control: 'object',
      description: 'An array of objects representing the list items.',
    },
  },
} as Meta<ListComponent>;

type Story = StoryObj<ListComponent>;

// Data that perfectly matches the image provided
const defaultItems: ListItem[] = [
  { label: 'Lorem Ipsum Dolor', value: '10/19/2017' },
  { label: 'Lorem Ipsum Dolor', value: 'Ut' },
  { label: 'Lorem Ipsum Dolor', value: 'Eros' },
  { label: 'Lorem Ipsum Dolor', value: 'Yes', hasCheckmark: true },
  { label: 'Lorem Ipsum Dolor', value: 'Sit' },
  { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
  { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
];

// The default story that replicates the image
export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

// A story to show how the component looks with fewer items
export const ShortList: Story = {
  args: {
    items: [
      { label: 'Status', value: 'Active', hasCheckmark: true },
      { label: 'User ID', value: 'user-12345' },
      { label: 'Last Login', value: '08/26/2025' },
    ],
  },
};

// A story to show the component's empty state
export const Empty: Story = {
  args: {
    items: [],
  },
};
