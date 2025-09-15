import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FrameoneCardComponent } from '../../projects/spiker-lib/src/lib/frameone-card/frameone-card.component';

export default {
  title: 'Components/FrameOneCard',
  component: FrameoneCardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    hasWarning: { control: 'boolean' },
    infoLabel: { control: 'text' },
    infoTextPrimary: { control: 'text' },
    infoTextSecondary: { control: 'text' },
    dataLabel: { control: 'text' },
    dataValuePrimary: { control: 'text' },
    dataValueSecondary: { control: 'text' },
  },
} as Meta<FrameoneCardComponent>;

type Story = StoryObj<FrameoneCardComponent>;

// Default story that matches the image
export const DefaultWithWarning: Story = {
  args: {
    title: 'Loremipsumdolorsit',
    subtitle: '192.168.1.1',
    hasWarning: true,
    infoLabel: 'Lorem:',
    infoTextPrimary: 'Lorem',
    infoTextSecondary: '"Ipsum"',
    dataLabel: 'Loremipsum',
    dataValuePrimary: 'Lorem',
    dataValueSecondary: '1234,5678',
  },
};

// Story to show the component without the warning badge
export const SafeState: Story = {
  args: {
    ...DefaultWithWarning.args, // Inherit all args from the default
    hasWarning: false, // But turn off the warning
  },
};

// Story with different data to show reusability
export const AnotherExample: Story = {
  args: {
    title: 'Production-Database-01',
    subtitle: '10.0.2.15',
    hasWarning: false,
    infoLabel: 'Status:',
    infoTextPrimary: 'System',
    infoTextSecondary: '"Online"',
    dataLabel: 'Connections',
    dataValuePrimary: 'Active',
    dataValueSecondary: '4,812',
  },
};
