import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Persona} from 'interfaces';
import { AcercaDeComponent } from './acerca-de.component';

describe('AcercaDeComponent', () => {
  let component: AcercaDeComponent;
  let fixture: ComponentFixture<AcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});