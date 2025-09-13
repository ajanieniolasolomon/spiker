import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define a type for a navigation item for clean, reusable code
export interface NavItem {
  id: string; // Unique identifier for the item
  label: string;
  iconSvgPath: string; // The 'd' attribute of an SVG <path>
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule], // Required for *ngFor, ngClass, etc.
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {
  @Input() activeItemId: string = 'dashboard';
  @Input() userName: string = 'Lorem';
  @Input() userRole: string = 'Lorem';

  @Output() navItemClicked = new EventEmitter<string>();
  @Output() logoutClicked = new EventEmitter<void>();
  @Output() toggleClicked = new EventEmitter<void>();

  @Input() isExpanded: boolean = true;

  isHovering: boolean = false;

  // --- Navigation Data ---
  // You can easily add, remove, or reorder items here
  topNavItems: NavItem[] = [
    { id: 'dashboard', label: 'Lorem', iconSvgPath: 'sidenav/1.svg' },
    { id: 'alerts', label: 'Lorem', iconSvgPath: 'sidenav/2.svg' },
    { id: 'reports', label: 'Lorem', iconSvgPath: 'sidenav/3.svg' },
    { id: 'discover', label: 'Lorem', iconSvgPath: 'sidenav/4.svg' },
    { id: 'deploy', label: 'Lorem', iconSvgPath: 'sidenav/5.svg' },
    { id: 'docs', label: 'Lorem', iconSvgPath: 'sidenav/6.svg' },
    { id: 'filters', label: 'Lorem', iconSvgPath: 'sidenav/7.svg' },
  ];

  bottomNavItems: NavItem[] = [
    { id: 'settings', label: 'Lorem', iconSvgPath: 'sidenav/9.svg' },
    { id: 'help', label: 'Lorem', iconSvgPath: 'sidenav/8.svg' },
  ];

  toggleSidenav(): void {
    this.isExpanded = !this.isExpanded;
  }

  handleItemClick(id: string): void {
    this.activeItemId = id;
    this.navItemClicked.emit(id);
  }
}
