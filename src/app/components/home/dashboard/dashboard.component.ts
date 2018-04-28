import { Component, OnInit } from '@angular/core';
import { ChartTypes } from '../../../helpers/Enums';

@Component({
	moduleId: module.id,
	selector: 'app-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

	public barChartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true
	};
	public barChartLabels: string[] = ['Remeras', 'Zapatillas', 'Pantalones', 'Mochilas', 'Buzos'];
	public barChartType: string = 'bar';
	public barChartLegend: boolean = true;

	public barChartData: any[] = [
		{ data: [65, 59, 80, 81, 56], label: 'Abril 2018' },
		{ data: [28, 48, 40, 19, 86], label: 'Marzo 2018' },
		{ data: [20, 35, 50, 28, 75], label: 'Febrero 2018' },
	];

	public lineChartData: Array<any> = [
		{ data: [650, 5900, 5000, 4500], label: '2018', fill: false },
		{ data: [1200, 5000, 3569, 3589, 2368, 9000, 6000, 10256, 6500, 8000, 7458, 10000], label: '2017', fill: false },
		{ data: [5000, 6234, 8540, 5800, 8000, 9500, 6250, 11258, 7500, 7524, 6852, 8954], label: '2016', fill: false },
	];
	public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
	public lineChartOptions: any = {
		responsive: true
	};
	public lineChartLegend: boolean = true;
	public lineChartType: string = 'line';

	constructor() { }

	public ngOnInit() { }
}
