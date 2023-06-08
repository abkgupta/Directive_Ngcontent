import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrcComponent } from './prc.component';

describe('PrcComponent', () => {
  let component: PrcComponent;
  let fixture: ComponentFixture<PrcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrcComponent]
    });
    fixture = TestBed.createComponent(PrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
