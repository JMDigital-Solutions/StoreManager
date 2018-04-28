import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILoginModel } from '../models/login.model';

@Injectable()
export class AuthService {

	private _apiUrl = '';
	private _token = '';

	constructor(
		private _http: HttpClient,
		private _route: ActivatedRoute,
		private _router: Router,
	) {
		const storageToken = localStorage.getItem('authToken');
		this._token = storageToken;
	}

	public login(login: ILoginModel) {
		if (login.Username === 'juan.manuel.saad' && login.Password === '123456') {
			this._token = 'logged in';
			localStorage.setItem('authToken', this._token);
			const returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');
			this._router.navigate([returnUrl || '']);
		} else
			console.log('Falló el login: ', login);
	}

	public isAuthenticated() {
		return this._token != null;
	}
}
