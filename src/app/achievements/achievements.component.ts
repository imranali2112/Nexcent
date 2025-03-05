import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent {
  achievementsData: any[] = [
    {
      image: 'assets/images/member.svg',
      members: '2,245,341',
      achievementsName: 'Member',
    },
    {
      image: 'assets/images/clubs.png',
      members: '46,628',
      achievementsName: 'Clubs',
    },
    {
      imagee: 'assets/images/booking.svg',
      memberss: '858,867',
      achievementsNamee: 'Events Booking',
    },
    {
      imagee: 'assets/images/payments.svg',
      memberss: '1,976,436',
      achievementsNamee: 'Payments',
    },
  ];
}
