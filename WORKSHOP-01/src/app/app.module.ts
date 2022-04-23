import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { AsideComponent } from './aside/aside.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { CoreModule } from './core/core.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		ThemeListComponent,
		AsideComponent,
		ThemeListItemComponent,
		PostListComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		CoreModule
	],
	providers: [

	],
	bootstrap: [
		AppComponent,
		HeaderComponent,
		FooterComponent
	]
})
export class AppModule { }
