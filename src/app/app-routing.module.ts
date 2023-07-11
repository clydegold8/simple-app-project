import { NgModule } from '@angular/core';
import { LoginComponent} from './components/login/login.component'
import { HomeComponent} from './components/home/home.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home' , component : HomeComponent},
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
