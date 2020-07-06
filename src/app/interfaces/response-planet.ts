import {Planet} from './planet';

export interface ResponsePlanet {
    count: number;
    next: string;
    previous: string;
    results: Planet[];
}
