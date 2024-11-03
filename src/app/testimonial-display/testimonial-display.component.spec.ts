import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialDisplayComponent } from './testimonial-display.component';

describe('TestimonialDisplayComponent', () => {
  let component: TestimonialDisplayComponent;
  let fixture: ComponentFixture<TestimonialDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
