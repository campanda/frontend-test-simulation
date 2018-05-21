import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokeViewComponent } from './poke-view/poke-view.component';
import { ApiWrapperService } from './api-wrapper.service';

@NgModule({
	declarations: [ AppComponent, PokeViewComponent ],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [ ApiWrapperService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
