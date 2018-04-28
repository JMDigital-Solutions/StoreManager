import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavSection } from '../../helpers/Enums';
import { INavItemModel } from '../../models/navItem.model';

@Component({
	moduleId: module.id,
	selector: 'store-manager-home',
	styleUrls: ['store-manager-home.component.scss'],
	templateUrl: 'store-manager-home.component.html',
})
export class StoreManagerHomeComponent implements OnInit, OnDestroy {

	public navItems: INavItemModel[] = [
		{ Link: 'dashboard', Label: 'Panel General', Section: NavSection.Dashboard, Icon: 'dashboard' },
		{ Link: 'sales', Label: 'Ventas', Section: NavSection.Operations, Icon: 'attach_money' },
		{ Link: 'returns', Label: 'Devoluciones', Section: NavSection.Operations, Icon: 'arrow_back' },
		{ Link: 'products', Label: 'Productos', Section: NavSection.Admin, Icon: 'shopping_cart' },
		{ Link: 'reports', Label: 'Informes', Section: NavSection.Admin, Icon: 'assignment' },
	];

	public mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	public ngOnInit() { }

	public ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	public filteredNavList(section: NavSection): INavItemModel[] {
		return this.navItems.filter(f => f.Section === section);
	}

}
