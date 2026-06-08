import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { BOTTOM_NAV_ITEMS } from '../../data';
import type { BottomNavItem } from '../../models';
import { trackById } from '../../utils';

@Component({
  selector: 'app-bottom-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './bottom-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomNavigationComponent {
  readonly items = BOTTOM_NAV_ITEMS;
  readonly trackByItemId = trackById<BottomNavItem>;
}
