import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevorolComponent } from './nuevorol.component';

describe('NuevorolComponent', () => {
  let component: NuevorolComponent;
  let fixture: ComponentFixture<NuevorolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevorolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevorolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
