import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RiskListItem {
  name: string;
  count: number;
  colorClass: string;
}

@Component({
  selector: 'app-context-analytic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './context-analytic-card.component.html',
})
export class ContextAnalyticCardComponent implements OnChanges {
  @Input() criticalCount: number = 0;
  @Input() highCount: number = 0;
  @Input() mediumCount: number = 0;
  @Input() lowCount: number = 0;

  totalCount: number = 0;
  circleBorderClass: string = 'border-gray-200';
  riskList: RiskListItem[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.updateComponentState();
  }

  private updateComponentState(): void {
    this.totalCount = this.criticalCount + this.highCount + this.mediumCount + this.lowCount;

    if (this.criticalCount > 0) {
      this.circleBorderClass = 'border-[#C6190D]';
    } else if (this.highCount > 0) {
      this.circleBorderClass = 'border-[#E5372B]';
    } else if (this.mediumCount > 0) {
      this.circleBorderClass = 'border-[#EBA622]';
    } else if (this.lowCount > 0) {
      this.circleBorderClass = 'border-[#08B94E]';
    } else {
      this.circleBorderClass = 'border-gray-200';
    }

    this.riskList = [
      { name: 'Critical', count: this.criticalCount, colorClass: 'bg-red-700' },
      { name: 'High', count: this.highCount, colorClass: 'bg-orange-500' },
      { name: 'Medium', count: this.mediumCount, colorClass: 'bg-yellow-500' },
      { name: 'Low', count: this.lowCount, colorClass: 'bg-green-500' },
    ];
  }
}


