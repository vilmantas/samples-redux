import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavBarComponent } from './utils/components/nav-bar/nav-bar.component';
import { TechnologiesListModule } from './private/components/technologies-list/technologies-list.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { UtilsModule } from './utils/utils.module';
import { MetaLoggingEffects } from './utils/meta-effects/logging.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([MetaLoggingEffects]),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    PublicModule,
    PrivateModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
