import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { SwapiRequestComponent } from './swapi-request/swapi-request.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'swapi', component: SwapiRequestComponent },
  { path: 'reactivo', component: ReactivoComponent },
  { path: '**', redirectTo: '/template', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
