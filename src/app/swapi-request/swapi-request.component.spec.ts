import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiRequestComponent } from './swapi-request.component';

describe('SwapiRequestComponent', () => {
  let component: SwapiRequestComponent;
  let fixture: ComponentFixture<SwapiRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapiRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
