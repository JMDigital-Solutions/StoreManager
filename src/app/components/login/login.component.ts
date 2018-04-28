import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ILoginModel } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';

@Component({
	moduleId: module.id,
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

	public loading = false;
	public _login: ILoginModel = { Username: '', Password: '' };

	constructor(
		private _authService: AuthService,
	) { }

	public ngOnInit() { }

	public login(form: NgForm) {
		this.loading = true;
		setTimeout(() => {
			this._authService.login(this._login);
			this.loading = false;
		}, 3000);
	}

}
