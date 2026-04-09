import { Routes } from '@angular/router';
import { Inicio} from './pages/inicio/inicio';
import { Ejercicios } from './pages/ejercicios/ejercicios';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    {
        path: 'inicio',
        component: Inicio
    },
    {
        path: 'ejercicio',
        component: Ejercicios
    },
    {
        path: 'contacto',
        component: Contacto
    },


];
