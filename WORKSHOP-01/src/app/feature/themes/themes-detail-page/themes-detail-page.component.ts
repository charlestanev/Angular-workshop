import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITheme } from 'src/app/core/interfaces';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
	selector: 'app-themes-detail-page',
	templateUrl: './themes-detail-page.component.html',
	styleUrls: ['./themes-detail-page.component.css']
})
export class ThemesDetailPageComponent implements OnInit {
	theme: ITheme;

	constructor(private activatedRoute: ActivatedRoute, private themeService: ThemeService) { }

	ngOnInit(): void {
		const themeId = this.activatedRoute.snapshot.params['themeId'];
		this.themeService.loadThemeById(themeId).subscribe(theme => {
			this.theme = theme;
		});

	}

}
