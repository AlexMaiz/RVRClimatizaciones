import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MantencionPage } from './mantencion.page';

describe('MantencionPage', () => {
  let component: MantencionPage;
  let fixture: ComponentFixture<MantencionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MantencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
