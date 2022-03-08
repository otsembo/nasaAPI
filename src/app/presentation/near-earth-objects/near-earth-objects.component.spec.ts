import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearEarthObjectsComponent } from './near-earth-objects.component';

describe('NearEarthObjectsComponent', () => {
  let component: NearEarthObjectsComponent;
  let fixture: ComponentFixture<NearEarthObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearEarthObjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearEarthObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
