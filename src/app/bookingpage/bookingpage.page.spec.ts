import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingpagePage } from './bookingpage.page';

describe('BookingpagePage', () => {
  let component: BookingpagePage;
  let fixture: ComponentFixture<BookingpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
