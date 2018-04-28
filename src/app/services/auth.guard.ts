import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private _authService: AuthService,
		private _router: Router,
	) { }

	public canActivate(route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

		if (localStorage.getItem('authToken'))
			return true;

		this._router.navigate(['login'], { queryParams: { returnUrl: state.url } });
		return false;
	}

}
