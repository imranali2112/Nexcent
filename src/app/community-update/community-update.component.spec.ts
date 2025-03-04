import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityUpdateComponent } from './community-update.component';

describe('CommunityUpdateComponent', () => {
  let component: CommunityUpdateComponent;
  let fixture: ComponentFixture<CommunityUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
