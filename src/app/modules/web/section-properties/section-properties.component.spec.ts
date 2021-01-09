import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPropertiesComponent } from './section-properties.component';

describe('SectionPropertiesComponent', () => {
  let component: SectionPropertiesComponent;
  let fixture: ComponentFixture<SectionPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
