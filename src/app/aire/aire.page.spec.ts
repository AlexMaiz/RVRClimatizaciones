import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AirePage } from './aire.page';

describe('AirePage', () => {
  let component: AirePage;
  let fixture: ComponentFixture<AirePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
