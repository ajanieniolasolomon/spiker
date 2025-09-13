import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../app/layout/components/sidenav/sidenav.component';

export default {
  title: 'Layout/Sidenav',
  component: SidenavComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    activeItemId: {
      control: 'text',
      description: 'The ID of the currently active navigation item.',
    },
    userName: { control: 'text' },
    userRole: { control: 'text' },
    isExpanded: {
      control: 'boolean',
      description: 'Controls the expanded/collapsed state for Storybook.',
    },
    navItemClicked: { action: 'navItemClicked' },
    logoutClicked: { action: 'logoutClicked' },
  },
  // Add a wrapper to the story to simulate page content
  render: args => ({
    props: args,
    template: `
      <div class="flex h-screen ">
        <app-sidenav
          [activeItemId]="activeItemId"
          [userName]="userName"
          [userRole]="userRole"
          [isExpanded]="isExpanded"
          (navItemClicked)="navItemClicked($event)"
          (logoutClicked)="logoutClicked($event)"
        ></app-sidenav>
        <main class="flex-grow p-8 bg-gray-50" [ngClass]="isExpanded ? 'ml-64' : 'ml-20'">
          <h1 class="text-2xl font-bold">Page Content</h1>
          <p>The main content of the application would go here.</p>
        </main>
      </div>
    `,
  }),
} as Meta<SidenavComponent>;

type Story = StoryObj<SidenavComponent>;

export const Expanded: Story = {
  args: {
    activeItemId: 'discover',
    userName: 'Jane Doe',
    userRole: 'Administrator',
    isExpanded: true,
  },
};

export const Collapsed: Story = {
  args: {
    ...Expanded.args,
    isExpanded: false,
  },
};
