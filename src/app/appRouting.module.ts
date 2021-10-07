import {NgModule} from "@angular/core";
import {Route, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutUSComponent} from "./about-us/about-us.component";
import {ContactUSComponent} from "./contact-us/contact-us.component";
import {LoginComponent} from "./login/login.component";
import {DetailPostComponent} from "./detail-post/detail-post.component";

const appRouters: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/:title', component: DetailPostComponent},
  {path: 'about-us', component: AboutUSComponent},
  {path: 'contact-us', component: ContactUSComponent},
  {path: 'log-in/:isLogin', component: LoginComponent},
  {path: 'sign-up/:isLogin', component: LoginComponent},
  {path: '**', redirectTo: '/home'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
