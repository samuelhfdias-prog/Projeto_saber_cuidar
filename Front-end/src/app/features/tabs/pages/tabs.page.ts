import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { BottomNavigationComponent } from '../../../shared/components/bottom-navigation/bottom-navigation.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [BottomNavigationComponent, RouterLink, RouterOutlet],
  templateUrl: './tabs.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsPage {}
