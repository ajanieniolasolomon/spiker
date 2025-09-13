import { Type } from '@angular/core';
import { AssetItem } from '../../../shared/models/asset-item.model';
import { ListItem } from '../../../shared/models/list-item.model';

export interface NoteData {
  title: string;
  subtitle: string;
}

export interface RemediationCardData {
  title: string;
  header: string;
  defaultText: string;
  expandableText: string;
}

export interface ImageHoverData {
  imageUrl: string;
  position: string;
  title: string;
  subtitle: string;
  hoverComponent: Type<any>;
}

export interface ContextRiskData {
  assetItems: AssetItem[];
  currentPageStart: number;
  currentPageEnd: number;
  totalItems: number;
}

export interface ContextAnalyticData {
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
}

export interface DashboardData {
  textOne: NoteData;
  textTwo: NoteData;
  remediationOne: RemediationCardData;
  remediationTwo: RemediationCardData;
  defaultItems: ListItem[];
  nodeA: ImageHoverData;
  nodesBC: ImageHoverData[];
  nodeCD: ImageHoverData;
  nodeEF: ImageHoverData;
  contextRisk: ContextRiskData;
  contextAnalytic: ContextAnalyticData;
}
