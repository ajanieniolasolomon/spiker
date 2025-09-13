import type { Meta, StoryObj } from '@storybook/angular';
import { RemediationCardComponent } from '../app/features/dashboard/components/remediation-card/remediation-card.component';

const meta: Meta<RemediationCardComponent> = {
  title: 'Components/RemediationCard',
  component: RemediationCardComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

type Story = StoryObj<RemediationCardComponent>;

export const Default: Story = {
  args: {
    title: 'Server',
    header: 'Server',
    defaultText: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    expandableText:
      'Lorem Ipsum Dolor Sit Amet Consectetur. Nunc Vitae Tortor Convallis Vitae Arcu. Magna.',
  },
};

export const ManyVersions: Story = {
  args: {
    title: 'Server',
    header: 'Server',
    defaultText: 'Lorem ipsum dolor sit amet consectetur.',
    expandableText:
      'Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.',
  },
};
