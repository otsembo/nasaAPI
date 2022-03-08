import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaProjectsComponent } from './nasa-projects.component';

describe('NasaProjectsComponent', () => {
  let component: NasaProjectsComponent;
  let fixture: ComponentFixture<NasaProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
