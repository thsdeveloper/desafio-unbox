import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailPlanetPage } from './detail-planet.page';

describe('DetailPlanetPage', () => {
  let component: DetailPlanetPage;
  let fixture: ComponentFixture<DetailPlanetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPlanetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPlanetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
