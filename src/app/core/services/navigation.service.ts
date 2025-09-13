import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

export interface NavigationState {
  activeItemId: string;
  userName: string;
  userRole: string;
  isSidenavExpanded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly _router = inject(Router);

  private readonly _navigationState = signal<NavigationState>({
    activeItemId: 'dashboard',
    userName: 'Lorem',
    userRole: 'Lorem',
    isSidenavExpanded: false,
  });

  public readonly navigationState = this._navigationState.asReadonly();

  public toggleSidenav(): void {
    this._navigationState.update(state => ({
      ...state,
      isSidenavExpanded: !state.isSidenavExpanded,
    }));
  }

  public setActiveItem(itemId: string): void {
    this._navigationState.update(state => ({
      ...state,
      activeItemId: itemId,
    }));
  }

  public updateUserInfo(userName: string, userRole: string): void {
    this._navigationState.update(state => ({
      ...state,
      userName,
      userRole,
    }));
  }

  public handleNavItemClick(itemId: string): void {
    this.setActiveItem(itemId);

    // Navigate to the appropriate route based on the item clicked
    switch (itemId) {
      case 'dashboard':
        this._router.navigate(['/dashboard']);
        break;
      case 'discover':
        this._router.navigate(['/dashboard']); // For now, all routes go to dashboard
        break;
      default:
        console.log('Navigation item clicked:', itemId);
      // Add more routes as needed
    }
  }

  public handleLogout(): void {
    console.log('User logout requested');
    // Implement logout logic here
  }
}
