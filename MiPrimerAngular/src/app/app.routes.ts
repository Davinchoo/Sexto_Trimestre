import { Routes } from '@angular/router';
import { Inicio} from './pages/inicio/inicio';
import { Ejercicio } from './pages/ejercicio/ejercicio';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    {
        path: '',
        component: Inicio
    },
    {
        path: 'ejercicio',
        component: Ejercicio
    },
    {
        path: 'contacto',
        component: Contacto
    },


];