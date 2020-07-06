import {Component, OnInit} from '@angular/core';
import {SwapiService} from '../../services/swapi.service';
import {Planet} from '../../interfaces/planet';
import {ResponsePlanet} from '../../interfaces/response-planet';
import {NavigationExtras, Router} from '@angular/router';
import _ from 'lodash';

@Component({
    selector: 'app-planetas',
    templateUrl: './planetas.page.html',
    styleUrls: ['./planetas.page.scss'],
})

export class PlanetasPage implements OnInit {
    responsePlanet: Planet[];
    allPlanetas: any;
    queryText: string;

    constructor(public restApi: SwapiService, private router: Router) {
        this.queryText = '';
        this.loadPlanets();
    }

    //
    ngOnInit() {

    }

    // Get planets
    loadPlanets() {
        return this.restApi.getPlanets().subscribe((data: ResponsePlanet) => {
            this.responsePlanet = data.results;
        });
    }

    detailPlanet(planet: Planet) {
        const navigationExtras: NavigationExtras = {
            state: {planet}
        };
        this.router.navigate(['detail-planet'], navigationExtras).then();
    }

    filterPlaneta(planeta: any) {
        const val = planeta.target.value;
        if (val && val.trim() !== '') {
            this.responsePlanet = _.values(this.allPlanetas);
        }
    }
}
