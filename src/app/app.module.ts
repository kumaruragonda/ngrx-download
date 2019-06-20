import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import * as fromRouter from './store';
import { storeFreeze } from 'ngrx-store-freeze';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { DownloadService } from './download/download-service.service';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromRouter.reducers, { metaReducers }),
    EffectsModule.forRoot(fromRouter.effects),
   // StoreRouterConnectingModule.forRoot({ stateKey: 'routerReducer' }),
    StoreDevtoolsModule.instrument({
      maxAge: environment.production ? 25 : false, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    HttpClientModule
  ],
  providers: [DownloadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
