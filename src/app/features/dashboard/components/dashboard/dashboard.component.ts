import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { NoteComponent } from '../../../../shared/components/note/note.component';
import { ListComponent } from '../../../../shared/components/list/list.component';
import { RemediationCardComponent } from '../remediation-card/remediation-card.component';
import { StatusComponent } from '../../../../shared/components/status/status.component';
import { ImageHoverComponent } from '../../../../shared/components/image-hover/image-hover.component';
import { ContextRiskCardComponent } from '../context-risk-card/context-risk-card.component';
import { ContextAnalyticCardComponent } from '../context-analytic-card/context-analytic-card.component';
import { ZoomService } from '../../../../core/services/zoom.service';
import { DashboardDataService } from '../../services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    NoteComponent,
    ListComponent,
    RemediationCardComponent,
    StatusComponent,
    ImageHoverComponent,
    ContextRiskCardComponent,
    ContextAnalyticCardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private readonly _zoomService = inject(ZoomService);
  private readonly _dashboardDataService = inject(DashboardDataService);

  public readonly zoomLevel = this._zoomService.zoomLevel;
  public readonly dashboardData = this._dashboardDataService.dashboardData;

  public readonly transformStyle = computed(() => {
    return `scale(${this.zoomLevel()})`;
  });

  public zoomIn(): void {
    this._zoomService.zoomIn();
  }

  public zoomOut(): void {
    this._zoomService.zoomOut();
  }

  public resetZoom(): void {
    this._zoomService.resetZoom();
  }
}
