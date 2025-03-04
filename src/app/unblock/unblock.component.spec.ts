import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnblockComponent } from './unblock.component';

describe('UnblockComponent', () => {
  let component: UnblockComponent;
  let fixture: ComponentFixture<UnblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnblockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
