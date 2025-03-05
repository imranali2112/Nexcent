import { Component } from '@angular/core';

@Component({
  selector: 'app-community-update',
  imports: [],
  templateUrl: './community-update.component.html',
  styleUrl: './community-update.component.scss'
})
export class CommunityUpdateComponent {
  communityCards: any[]=[
    {
      CommunityImage:'assets/images/updatesImage1.svg',
      CommunityTitle:'Creating Streamlined Safeguarding Processes with OneRen',
    },
    {
      CommunityImage:'assets/images/updatesImage2.svg',
      CommunityTitle:'What are your safeguarding responsibilities and how can you manage them',
    },
    {
      CommunityImage:'assets/images/updatesImage3.svg',
      CommunityTitle:'Revamping the Membership Model with Triathlon Australia',
    },
  ]

}
