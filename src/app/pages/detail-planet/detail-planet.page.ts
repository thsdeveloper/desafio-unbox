import {Component, OnInit} from '@angular/core';
import {Planet} from '../../interfaces/planet';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-detail-planet',
    templateUrl: './detail-planet.page.html',
    styleUrls: ['./detail-planet.page.scss'],
})
export class DetailPlanetPage implements OnInit {
    planet: Planet = null;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.planet = this.router.getCurrentNavigation().extras.state.planet;
            }
        });
    }

    ngOnInit() {
        console.log(this.planet);
    }

}
