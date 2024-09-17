import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoactorComponent } from './nuevoactor.component';

describe('NuevoactorComponent', () => {
  let component: NuevoactorComponent;
  let fixture: ComponentFixture<NuevoactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoactorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
