import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderShowComponent } from './reminder-show.component';

describe('ReminderShowComponent', () => {
  let component: ReminderShowComponent;
  let fixture: ComponentFixture<ReminderShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
