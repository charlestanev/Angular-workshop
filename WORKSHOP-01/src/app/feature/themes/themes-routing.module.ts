import { RouterModule, Routes } from "@angular/router";
import { ThemesDetailPageComponent } from "./themes-detail-page/themes-detail-page.component";
import { ThemesPageComponent } from "./themes-page/themes-page.component";

const routes: Routes = [
	{
		path: 'themes',
		component: ThemesPageComponent
	},
	{
		path: 'themes/:themeId',
		component: ThemesDetailPageComponent,
	}
]

export const ThemesRoutingModule = RouterModule.forChild(routes)