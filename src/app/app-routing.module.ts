import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AcompanhamentoComponent } from './pages/acompanhamento/acompanhamento.component';
import { PlanejarInspecaoComponent } from './pages/planejar-inspecao/planejar-inspecao.component';
import { ChecklistsComponent } from './pages/checklists/checklists.component';
import { CadastrosComponent } from './pages/cadastros/cadastros.component';
import { RevisaoComponent } from './pages/revisao/revisao.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login | Field Ops' },
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard | Field Ops' },
  { path: 'acompanhamento', component: AcompanhamentoComponent, title: 'Acompanhamento | Field Ops' },
  { path: 'planejar-inspecao', component: PlanejarInspecaoComponent, title: 'Planejar Inspeção | Field Ops' },
  { path: 'checklists', component: ChecklistsComponent, title: 'Modelos de Checklist | Field Ops' },
  { path: 'cadastros', component: CadastrosComponent, title: 'Cadastros | Field Ops' },
  { path: 'revisao', component: RevisaoComponent, title: 'Revisão Técnica | Field Ops' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
