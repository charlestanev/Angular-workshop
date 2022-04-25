import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { AsideComponent } from './aside/aside.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { PostListComponent } from './post-list/post-list.component';



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
