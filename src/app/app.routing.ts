import { RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {ParentComponent} from './components/parent/parent.component';
import {ActorComponentComponent} from './components/actor-component/actor-component.component';
import {TicketComponent} from './components/ticket/ticket.component';
import {ListTicketsComponent} from './components/list-tickets/list-tickets.component';
import {ListAnnoncesComponent} from './components/list-annonces/list-annonces.component';
import {EstimationCoutComponent} from './components/estimation-cout/estimation-cout.component';

const appRoutes: Routes = [{
  path: 'home',
  component: UserComponent
},
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'managing',
    component: ListTicketsComponent
  },
  {
    path: 'archive',
    component: UsersComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'List',
    component: ListAnnoncesComponent
  },
  {
    path: 'estimation',
    component: EstimationCoutComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ActorComponentComponent
  }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
