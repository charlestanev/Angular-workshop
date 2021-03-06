import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { PostListComponent } from './post-list/post-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { ThemesPageComponent } from './themes-page/themes-page.component';
import { SharedModule } from 'src/app/shared/shared-module';
import { ThemesDetailPageComponent } from './themes-detail-page/themes-detail-page.component';



@NgModule({
	declarations: [
		ThemeListComponent,
		AsideComponent,
		ThemeListItemComponent,
		PostListComponent,
		ThemesPageComponent,
  ThemesDetailPageComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		ThemesRoutingModule,
	],
	exports: [
		// ThemeListComponent,
		// AsideComponent,
		// ThemeListItemComponent,
		// PostListComponent,
	]
})
export class ThemesModule { }