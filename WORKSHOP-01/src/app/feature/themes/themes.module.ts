import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { PostListComponent } from './post-list/post-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeListComponent } from './theme-list/theme-list.component';



@NgModule({
	declarations: [
		ThemeListComponent,
		AsideComponent,
		ThemeListItemComponent,
		PostListComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		// ThemeListComponent,
		// AsideComponent,
		// ThemeListItemComponent,
		// PostListComponent,
	]
})
export class ThemesModule { }