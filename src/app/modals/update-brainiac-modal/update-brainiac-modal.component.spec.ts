import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBrainiacModalComponent } from './update-brainiac-modal.component';

describe('UpdateBrainiacModalComponent', () => {
  let component: UpdateBrainiacModalComponent;
  let fixture: ComponentFixture<UpdateBrainiacModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBrainiacModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBrainiacModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
