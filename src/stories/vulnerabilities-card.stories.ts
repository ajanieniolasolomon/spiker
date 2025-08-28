import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { VulnerabilitiesCardComponent } from '../components/vulnerabilities-card/vulnerabilities-card.component';


export default {
  title: 'Components/Vulnerabilities Info',
  component: VulnerabilitiesCardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title for the section.',
    },
    vulnerableVersions: {
      control: 'object',
      description: 'An array of strings for the vulnerable versions.',
    },
    patchedVersionLabel: {
      control: 'text',
      description: 'The label for the patched version (e.g., "Patched in").',
    },
    patchedVersion: {
      control: 'text',
      description: 'The version number that includes the fix.',
    },
  },
} as Meta<VulnerabilitiesCardComponent>;

type Story = StoryObj<VulnerabilitiesCardComponent>;

// Default story that matches the image
export const Default: Story = {
  args: {
    title: 'Lorem Ipsum Dolor Sit',
    vulnerableVersions: [
      '1.2.3.4', '1.2.3.4', '1.2.3.4',
      '1.2.3.4', '1.2.3.4', '1.2.3.4'
    ],
    patchedVersionLabel: 'Lorem',
    patchedVersion: '1.2.3.4',
  },
};

// A second story to show how the component adapts to fewer versions
export const FewerVersions: Story = {
    args: {
      title: 'Affected Versions',
      vulnerableVersions: [
        '2.1.0', '2.1.1', '2.2.0'
      ],
      patchedVersionLabel: 'Patched in',
      patchedVersion: '2.2.1',
    },
  };

// A third story to show how it handles a long list that wraps
export const ManyVersions: Story = {
    args: {
      title: 'Lorem Ipsum Dolor Sit',
      vulnerableVersions: [
        '1.0.0', '1.0.1', '1.1.0',
        '1.1.2', '1.1.3', '1.2.0',
        '1.2.1', '1.2.2', '1.3.0',
      ],
      patchedVersionLabel: 'Upgrade to',
      patchedVersion: '1.3.1',
    },
  };