import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {Routes, RouterModule} from "@angular/router";
import {MajorComponent} from './major/major.component';
import {ApiService} from "./services/api.service";

const appRoutes: Routes = [
	{
		path: 'majors',
		component: MajorComponent
	},
	{
		path: '',
		redirectTo: '/majors',
		pathMatch: 'full'
	},
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MajorComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes),
	],
	providers: [
		ApiService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
