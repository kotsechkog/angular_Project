import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatIconModule, MatMenuModule, MatSelectModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { routes } from './app.routes';
import { CompetitionsComponent } from './competitions/competitions.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserComponent } from './drawer/user/user.component';
import { NavComponent } from './drawer/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    CompetitionsComponent,
    DrawerComponent,
    ToolbarComponent,
    UserComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatMenuModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
