import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { StatusComponent } from '../../projects/spiker-lib/src/public-api';

export default {
  title: 'Components/Status',
  component: StatusComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    status: {
      control: { type: 'select' },
      options: ['success', 'warning', 'error'],
    },
  },
} as Meta<StatusComponent>;

type Story = StoryObj<StatusComponent>;

// Story for the "Success" state
export const Success: Story = {
  args: {
    title: 'Lorem',
    status: 'success',
  },
};

// Story for the "Warning" state
export const Warning: Story = {
  args: {
    title: 'Lorem',
    status: 'warning',
  },
};

// Story for the "Error" state
export const Error: Story = {
  args: {
    title: 'Lorem',
    status: 'error',
  },
};

// Story demonstrating the optional subtitle
export const WithSubtitle: Story = {
  args: {
    title: 'Verification Complete',
    subtitle: 'All checks passed successfully.',
    status: 'success',
  },
};

// Story to show all statuses together, as in the original image
export const AllStatuses: Story = {
  render: () => ({
    template: `
            <div class="flex items-center space-x-6">
                <app-status status="error" title="Lorem"></app-status>
                <app-status status="warning" title="Lorem"></app-status>
                <app-status status="success" title="Lorem"></app-status>
            </div>
        `,
  }),
};
