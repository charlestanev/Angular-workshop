import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CoreModule } from './core/core.module';
import { ThemesModule } from './feature/themes/themes.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		CoreModule,
		ThemesModule
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
