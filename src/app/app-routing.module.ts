import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent, LoginComponent, StoreManagerHomeComponent, ProductsAdminComponent } from './components/components';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{
		path: 'home', canActivate: [AuthGuard], component: StoreManagerHomeComponent, children: [
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'products', component: ProductsAdminComponent },
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
		],
	},
	{ path: '**', redirectTo: 'inbox' },
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
