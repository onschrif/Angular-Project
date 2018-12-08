import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { AreaComponent } from './components/area/area.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FilmsComponentComponent } from './components/films-component/films-component.component';
import { ActorsComponentComponent } from './components/actors-component/actors-component.component';
import { ActorComponentComponent } from './components/actor-component/actor-component.component';

import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { UserFormComponent } from './components/user-form/user-form.component';
import { EventsComponent } from './components/events/events.component';
import { ListTicketsComponent } from './components/list-tickets/list-tickets.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { AnnoncesComponent } from './components/annonces/annonces.component';
import { ListAnnoncesComponent } from './components/list-annonces/list-annonces.component';
import { EstimationCoutComponent } from './components/estimation-cout/estimation-cout.component';
import { PageComponent } from './components/page/page.component';
import { PartiesComponent } from './components/parties/parties.component';
import { DetailsPartyComponent } from './components/details-party/details-party.component';
import { DoctorComponent } from './components/doctor/doctor.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UserComponent,
    UsersComponent,
    AreaComponent,
    ParentComponent,
    ChildComponent,
    FilmsComponentComponent,
    ActorsComponentComponent,
    ActorComponentComponent,
    UserFormComponent,
    EventsComponent,
    ListTicketsComponent,
    TicketComponent,
    AnnoncesComponent,
    ListAnnoncesComponent,
    EstimationCoutComponent,
    PageComponent,
    PartiesComponent,
    DetailsPartyComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
