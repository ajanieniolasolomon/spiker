import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { NoteComponent } from '../app/shared/components';

export default {
  title: 'Components/Note',
  component: NoteComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title of the note.',
    },
    subtitle: {
      control: 'text',
      description: 'The optional body text of the note.',
    },
  },
} as Meta<NoteComponent>;

type Story = StoryObj<NoteComponent>;

// Story that perfectly matches the image provided
export const Default: Story = {
  args: {
    title: 'Description',
    subtitle:
      'Lorem Ipsum Dolor Sit Amet Consectetur. Aenean Sodales Pellentesque Gravida Nibh Et Magna Faucibus. Dui Commodo Ut Metus Amet Egestas Habitant Viverra. Quisque Fusce Senectus Facilisis Non Diam Leo Nulla Sem Pellentesque. Sit In Vel Sed Cursus Metus Sit Fringilla Vestibulum.',
  },
};

// Story to demonstrate the component with only a title
export const TitleOnly: Story = {
  args: {
    title: 'Section Header',
    // The subtitle is intentionally left undefined here
  },
};

// Story with different content to show reusability
export const AnotherExample: Story = {
  args: {
    title: 'Usage Instructions',
    subtitle:
      'This component should be used to display important information or descriptions that require a clear and distinct header.',
  },
};
