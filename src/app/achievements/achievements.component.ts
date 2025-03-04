import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {
  achievementsData: any[]= [
    {
      image:'assets/images/member.svg',
      members:'2,245,341',
      achievementsName:'Member'
    },
    {
      image:'assets/images/clubs.png',
      members:'46,628',
      achievementsName:'Clubs'
    },
    {
      image:'assets/images/booking.svg',
      members:'858,867',
      achievementsName:'Events Booking'
    },
    {
      image:'assets/images/payments.svg',
      members:'1,976,436',
      achievementsName:'Payments'
    },
  ]

}
