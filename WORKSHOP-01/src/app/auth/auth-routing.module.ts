import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "../app-routing-module";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
	{
		path: 'register',
		component: RegisterComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'profile',
		component: ProfileComponent,
	}
]

export const AuthRoutingModule = RouterModule.forChild(routes);