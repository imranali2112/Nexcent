import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  imports: [],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {
  community_data:any []=[
    {
      image:'assets/images/membership.svg',
      heading:'Membership Organisations',
      description:'Our membership management software provides full automation of membership renewals and payments'
    },
    {
      image:'assets/images/association1.svg',
      heading:'National Associations',
      description:'Our membership management software provides full automation of membership renewals and payments'
    },
    {
      image:'assets/images/association2.svg',
      heading:'Clubs And Groups',
      description:'Our membership management software provides full automation of membership renewals and payments'
    },
  ]

}
