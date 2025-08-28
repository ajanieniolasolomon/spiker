import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { NoteComponent } from '../components/note/note.component';
import { ListComponent, ListItem } from '../components/list/list.component';
import { RemediationCardComponent } from '../components/remediation-card/remediation-card.component';
import { StatusComponent } from '../components/status/status.component';
import { ImageHoverComponent } from '../components/image-hover/image-hover.component';
import { FrameoneCardComponent } from '../components/frameone-card/frameone-card.component';
import { VulnerabilitiesCardComponent } from '../components/vulnerabilities-card/vulnerabilities-card.component';
import { FrametwoCardComponent } from '../components/frametwo-card/frametwo-card.component';
import { AssetItem, ContextRiskCardComponent } from '../components/context-risk-card/context-risk-card.component';
import { ContextAnalyticCardComponent } from '../components/context-analytic-card/context-analytic-card.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,SidenavComponent,NoteComponent,ListComponent,RemediationCardComponent,StatusComponent,ImageHoverComponent,ContextRiskCardComponent,ContextAnalyticCardComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spiker';
    // The current zoom level. 1 = 100%
  zoomLevel: number = 0.8;
 isSidenavExpanded: boolean = false;
  // Configuration for zoom behavior
  readonly ZOOM_STEP = 0.1;
  readonly MIN_ZOOM = 0.5; // 50%
  readonly MAX_ZOOM = 2.0; // 200%
  isExpanded: boolean = true;
  sideNav= {
    activeItemId: 'discover',
    userName: 'Jane Doe',
    userRole: 'Administrator',
    isExpanded: true,
  }
  textOne={
    title: 'Description',
    subtitle: 'Lorem Ipsum Dolor Sit Amet Consectetur. Aenean Sodales Pellentesque Gravida Nibh Et Magna Faucibus. Dui Commodo Ut Metus Amet Egestas Habitant Viverra. Quisque Fusce Senectus Facilisis Non Diam Leo Nulla Sem Pellentesque. Sit In Vel Sed Cursus Metus Sit Fringilla Vestibulum.',
  };

    textTwo={
    title: 'Extract',
    subtitle: 'Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.',
  };
redOne={
   title: 'Server',
   header:'Lorem T',
   defaultText: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    expandableText: 'Lorem Ipsum Dolor Sit Amet Consectetur. Nunc Vitae Tortor Convallis Vitae Arcu. Magna.',
  };
  redTwo = {
   title: 'Server',
   header:'Lorem P',
   defaultText: 'Lorem ipsum dolor sit amet consectetur.',
    expandableText: 'Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.',
  };
  defaultItems: ListItem[] = [
    { label: 'Lorem Ipsum Dolor', value: '10/19/2017' },
    { label: 'Lorem Ipsum Dolor', value: 'Ut' },
    { label: 'Lorem Ipsum Dolor', value: 'Eros' },
    { label: 'Lorem Ipsum Dolor', value: 'Yes', hasCheckmark: true },
    { label: 'Lorem Ipsum Dolor', value: 'Sit' },
    { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
    { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
  ];

 A ={
      imageUrl: 'mask.svg', // Placeholder image
      position: 'left-bottom',
      title: 'Loremipsu',
      subtitle: '',
      // Pass the actual component class as an argument
      hoverComponent: VulnerabilitiesCardComponent,
    };

    BC=[
      {
      imageUrl: 'frametwo.svg', // Placeholder image
      position: 'bottom-center',
      title: 'Loremipsu',
      subtitle: '',
      // Pass the actual component class as an argument
      hoverComponent: FrametwoCardComponent,
    },
       {
      imageUrl: 'frametwo.svg', // Placeholder image
      position: 'bottom-center',
      title: 'Loremipsumm',
      subtitle: '',
      // Pass the actual component class as an argument
      hoverComponent: FrametwoCardComponent,
    },

    ]


 CD ={
      imageUrl: 'frameone.svg', // Placeholder image
      position: 'right-bottom',
      title: 'Loremipsu',
      subtitle: '192.168.1.1',
      // Pass the actual component class as an argument
      hoverComponent: FrameoneCardComponent,
    };
     EF ={
      imageUrl: 'frameone.svg', // Placeholder image
      position: 'right-bottom',
      title: 'Loremipsu',
      subtitle: '192.168.1.1',
      // Pass the actual component class as an argument
      hoverComponent: FrameoneCardComponent,
    };


    GH= {
    assetItems: [
      { title: 'Production', subtitle: '10.0.1.5', riskLevel: 'Critical' },
      { title: 'Staging-API', subtitle: '10.0.2.10', riskLevel: 'High' },
    
    ] as AssetItem[],
    currentPageStart: 11,
    currentPageEnd: 14,
    totalItems: 57,
  };
  IJ= {
    criticalCount: 2,
    highCount: 0,
    mediumCount: 0,
    lowCount: 0,
  };
  navItemClicked(events:any){
    console.log(events);
  }
  logoutClicked(events:any){
    console.log(events);
  }


  // This single method is used by both the hamburger and the sidenav's output.
  toggleSidenav(): void {
    this.isSidenavExpanded = !this.isSidenavExpanded;
  }


  zoomIn(): void {
    // Increase the zoom level, but not beyond the max
    this.zoomLevel = Math.min(this.MAX_ZOOM, this.zoomLevel + this.ZOOM_STEP);
  }

  zoomOut(): void {
    // Decrease the zoom level, but not below the min
    this.zoomLevel = Math.max(this.MIN_ZOOM, this.zoomLevel - this.ZOOM_STEP);
  }

  resetZoom(): void {
    this.zoomLevel = 1;
  }

}
