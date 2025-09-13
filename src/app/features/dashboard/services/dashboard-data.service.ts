import { Injectable, signal } from '@angular/core';
import { DashboardData } from '../models/dashboard-data.model';
import { VulnerabilitiesCardComponent } from '../components/vulnerabilities-card/vulnerabilities-card.component';
import { FrametwoCardComponent } from '../components/frametwo-card/frametwo-card.component';
import { FrameoneCardComponent } from '../components/frameone-card/frameone-card.component';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  private readonly _dashboardData = signal<DashboardData>({
    textOne: {
      title: 'Description',
      subtitle:
        'Lorem Ipsum Dolor Sit Amet Consectetur. Aenean Sodales Pellentesque Gravida Nibh Et Magna Faucibus. Dui Commodo Ut Metus Amet Egestas Habitant Viverra. Quisque Fusce Senectus Facilisis Non Diam Leo Nulla Sem Pellentesque. Sit In Vel Sed Cursus Metus Sit Fringilla Vestibulum.',
    },
    textTwo: {
      title: 'Extract',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.',
    },
    remediationOne: {
      title: 'Server',
      header: 'Lorem T',
      defaultText: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
      expandableText:
        'Lorem Ipsum Dolor Sit Amet Consectetur. Nunc Vitae Tortor Convallis Vitae Arcu. Magna.',
    },
    remediationTwo: {
      title: 'Server',
      header: 'Lorem P',
      defaultText: 'Lorem ipsum dolor sit amet consectetur.',
      expandableText:
        'Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.',
    },
    defaultItems: [
      { label: 'Lorem Ipsum Dolor', value: '10/19/2017' },
      { label: 'Lorem Ipsum Dolor', value: 'Ut' },
      { label: 'Lorem Ipsum Dolor', value: 'Eros' },
      { label: 'Lorem Ipsum Dolor', value: 'Yes', hasCheckmark: true },
      { label: 'Lorem Ipsum Dolor', value: 'Sit' },
      { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
      { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
    ],
    nodeA: {
      imageUrl: 'mask.svg',
      position: 'left-bottom',
      title: 'Loremipsu',
      subtitle: '',
      hoverComponent: VulnerabilitiesCardComponent,
    },
    nodesBC: [
      {
        imageUrl: 'frametwo.svg',
        position: 'bottom-center',
        title: 'Loremipsu',
        subtitle: '',
        hoverComponent: FrametwoCardComponent,
      },
      {
        imageUrl: 'frametwo.svg',
        position: 'bottom-center',
        title: 'Loremipsumm',
        subtitle: '',
        hoverComponent: FrametwoCardComponent,
      },
    ],
    nodeCD: {
      imageUrl: 'frameone.svg',
      position: 'right-bottom',
      title: 'Loremipsu',
      subtitle: '192.168.1.1',
      hoverComponent: FrameoneCardComponent,
    },
    nodeEF: {
      imageUrl: 'frameone.svg',
      position: 'right-bottom',
      title: 'Loremipsu',
      subtitle: '192.168.1.1',
      hoverComponent: FrameoneCardComponent,
    },
    contextRisk: {
      assetItems: [
        { title: 'Loremipsumdolorsit', subtitle: '10.0.1.5', riskLevel: 'Critical' },
        { title: 'Loremipsumdolorsit', subtitle: '10.0.2.10', riskLevel: 'High' },
      ],
      currentPageStart: 11,
      currentPageEnd: 14,
      totalItems: 57,
    },
    contextAnalytic: {
      criticalCount: 2,
      highCount: 0,
      mediumCount: 0,
      lowCount: 0,
    },
  });

  public readonly dashboardData = this._dashboardData.asReadonly();

  public updateDashboardData(data: Partial<DashboardData>): void {
    this._dashboardData.update(current => ({
      ...current,
      ...data,
    }));
  }
}
