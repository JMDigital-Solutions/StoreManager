import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent, LoginComponent, StoreManagerHomeComponent, SummaryTableComponent, ProductsAdminComponent } from './components/components';
import { MaterialModule } from './material.module';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
	declarations: [
		AppComponent,
		StoreManagerHomeComponent,
		DashboardComponent,
		LoginComponent,
		SummaryTableComponent,
		ProductsAdminComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,
		ChartsModule
	],
	providers: [AuthGuard, AuthService],
	bootstrap: [AppComponent],
})
export class AppModule { }
