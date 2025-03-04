import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ClientsComponent } from './clients/clients.component';
import { CommunityComponent } from './community/community.component';
import { UnblockComponent } from './unblock/unblock.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { CalenderComponent } from './calender/calender.component';
import { CustomersComponent } from './customers/customers.component';
import { CommunityUpdateComponent } from './community-update/community-update.component';
import { FooterDemoComponent } from './footer-demo/footer-demo.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ClientsComponent,
    CommunityComponent,
    UnblockComponent,
    AchievementsComponent,
    CalenderComponent,
    CustomersComponent,
    CommunityUpdateComponent,
    FooterDemoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nexcent';
}
