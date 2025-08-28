import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ContextAnalyticCardComponent } from '../components/context-analytic-card/context-analytic-card.component';


export default {
  title: 'Components/ContextAnalyticCard',
  component: ContextAnalyticCardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    criticalCount: { control: { type: 'number', min: 0 } },
    highCount: { control: { type: 'number', min: 0 } },
    mediumCount: { control: { type: 'number', min: 0 } },
    lowCount: { control: { type: 'number', min: 0 } },
  },
} as Meta<ContextAnalyticCardComponent>;

type Story = StoryObj<ContextAnalyticCardComponent>;

// Story that perfectly matches the image
export const Default: Story = {
  args: {
    criticalCount: 2,
    highCount: 0,
    mediumCount: 0,
    lowCount: 0,
  },
};

// Story where "High" is the most severe risk
export const HighRisk: Story = {
  args: {
    criticalCount: 0,
    highCount: 5,
    mediumCount: 12,
    lowCount: 8,
  },
};

// Story where "Medium" is the most severe risk
export const MediumRisk: Story = {
  args: {
    criticalCount: 0,
    highCount: 0,
    mediumCount: 10,
    lowCount: 3,
  },
};

// Story for a "safe" state with no risks
export const SafeState: Story = {
  args: {
    criticalCount: 0,
    highCount: 0,
    mediumCount: 0,
    lowCount: 0,
  },
};