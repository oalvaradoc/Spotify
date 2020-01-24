import { Routes } from '@angular/router';
import { LanzamientosComponent } from './components/lanzamientos/lanzamientos.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';



export const ROUTES: Routes = [
    { path: 'lanzamientos', component: LanzamientosComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'lanzamientos' },
    { path: '**', pathMatch: 'full', redirectTo: 'lanzamientos' }
];

