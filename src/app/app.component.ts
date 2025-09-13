import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './layout/components/sidenav/sidenav.component';
import { NavigationService } from './core/services/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly _navigationService = inject(NavigationService);

  public readonly navigationState = this._navigationService.navigationState;

  public onToggleSidenav(): void {
    this._navigationService.toggleSidenav();
  }

  public onNavItemClicked(itemId: string): void {
    this._navigationService.handleNavItemClick(itemId);
  }

  public onLogoutClicked(): void {
    this._navigationService.handleLogout();
  }
}
