import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ImageHoverComponent } from '../components/image-hover/image-hover.component';
import { FrameoneCardComponent } from '../components/frameone-card/frameone-card.component';
import { FrametwoCardComponent } from '../components/frametwo-card/frametwo-card.component';
import { FramethreeCardComponent } from '../components/framethree-card/framethree-card.component';


export default {
  title: 'Components/ImageHover (Dynamic Component)',
  component: ImageHoverComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        // IMPORTANT: Any component that will be created dynamically
        // must be imported here so Angular knows about it.
        FrameoneCardComponent,
        FrametwoCardComponent,
      ],
    }),
  ],
  argTypes: {
    imageUrl: { control: 'text' },
    position: {
      control: { type: 'select' },
      options: ['top-center', 'bottom-center'],
    },
    // We can't create a UI control for a component class, so we disable it
    hoverComponent: {
      control: false,
      description: 'The component class to render on hover. Set programmatically in each story.',
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<ImageHoverComponent>;

type Story = StoryObj<ImageHoverComponent>;

// Story that dynamically creates Frame1Component
export const WithFrame1Component: Story = {
  args: {
    imageUrl: 'mask.svg', // Placeholder image
    position: 'bottom-center',
    title: 'Frame One Title',
    // Pass the actual component class as an argument
    hoverComponent: FrameoneCardComponent,
  },
};

// Story that dynamically creates Frame2Component
export const WithFrame2Component: Story = {
  args: {
    imageUrl: 'frametwo.svg',
    position: 'top-center',
    title: 'Frame One Title',
    subtitle: '193.9030.39030',
    hoverComponent: FrametwoCardComponent,
  },
};


export const WithFrame3Component: Story = {
  args: {
    imageUrl: 'frameone.svg',
    position: 'top-center',
    title: 'Frame One Title',
    hoverComponent: FramethreeCardComponent,
  },
};