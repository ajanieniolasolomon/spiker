import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AssetItem, ContextRiskCardComponent } from '../components/context-risk-card/context-risk-card.component';
// import { action } from '@storybook/addon-actions';


export default {
  title: 'Components/ContextRiskCard',
  component: ContextRiskCardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  // This allows Storybook's "Actions" addon to log the events
  argTypes: {
    previousPageClicked: { action: 'previousPageClicked' },
    nextPageClicked: { action: 'nextPageClicked' },
  },
} as Meta<ContextRiskCardComponent>;

type Story = StoryObj<ContextRiskCardComponent>;

// Data for the default story that matches the image
const defaultAssetItems: AssetItem[] = [
  { title: 'Loremipsumdolorsit', subtitle: '192.168.1.1', riskLevel: 'Critical' },
  { title: 'Loremipsumdolorsit002', subtitle: '192.168.1.2', riskLevel: 'Critical' },
];

export const Default: Story = {
  args: {
    assetItems: defaultAssetItems,
    currentPageStart: 1,
    currentPageEnd: 2,
    totalItems: 2,
  },
};

// Story to show different risk levels and more items
export const MultipleRisksAndPages: Story = {
  args: {
    assetItems: [
      { title: 'Production-DB-01', subtitle: '10.0.1.5', riskLevel: 'Critical' },
      { title: 'Staging-API', subtitle: '10.0.2.10', riskLevel: 'High' },
      { title: 'Dev-Web-Server', subtitle: '10.0.3.15', riskLevel: 'Medium' },
      { title: 'Internal-Wiki', subtitle: '192.168.1.100', riskLevel: 'Low' },
    ],
    currentPageStart: 11,
    currentPageEnd: 14,
    totalItems: 57,
  },
};

// Story to show an empty state
export const EmptyState: Story = {
  args: {
    assetItems: [],
    currentPageStart: 0,
    currentPageEnd: 0,
    totalItems: 0,
  },
};