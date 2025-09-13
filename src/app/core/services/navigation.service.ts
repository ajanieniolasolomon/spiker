import { Injectable, signal } from '@angular/core';

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
  private readonly _navigationState = signal<NavigationState>({
    activeItemId: 'discover',
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
    console.log('Navigation item clicked:', itemId);
  }

  public handleLogout(): void {
    console.log('User logout requested');
    // Implement logout logic here
  }
}
