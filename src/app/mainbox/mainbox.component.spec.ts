import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainboxComponent } from './mainbox.component';

describe('MainboxComponent', () => {
  let component: MainboxComponent;
  let fixture: ComponentFixture<MainboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
