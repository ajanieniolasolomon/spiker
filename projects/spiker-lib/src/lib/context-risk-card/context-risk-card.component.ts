import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type RiskLevel = 'Critical' | 'High' | 'Medium' | 'Low';

export interface AssetItem {
  title: string;
  subtitle: string;
  riskLevel: RiskLevel;
}

@Component({
  selector: 'app-context-risk-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './context-risk-card.component.html',
})
export class ContextRiskCardComponent {
  @Input() assetItems: AssetItem[] = [];
  @Input() currentPageStart: number = 0;
  @Input() currentPageEnd: number = 0;
  @Input() totalItems: number = 0;
  @Output() previousPageClicked = new EventEmitter<void>();
  @Output() nextPageClicked = new EventEmitter<void>();

  riskLevelClasses = {
    Critical: 'bg-[#FFE2E0] text-[#C6190D]',
    High: 'bg-orange-100 text-orange-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Low: 'bg-blue-100 text-blue-800',
  };

  getRiskClass(riskLevel: RiskLevel): string {
    return this.riskLevelClasses[riskLevel] || this.riskLevelClasses['Medium'];
  }
}


