import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AcompanhamentoComponent } from './pages/acompanhamento/acompanhamento.component';
import { PlanejarInspecaoComponent } from './pages/planejar-inspecao/planejar-inspecao.component';
import { ChecklistsComponent } from './pages/checklists/checklists.component';
import { CadastrosComponent } from './pages/cadastros/cadastros.component';
import { RevisaoComponent } from './pages/revisao/revisao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AcompanhamentoComponent,
    PlanejarInspecaoComponent,
    ChecklistsComponent,
    CadastrosComponent,
    RevisaoComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
