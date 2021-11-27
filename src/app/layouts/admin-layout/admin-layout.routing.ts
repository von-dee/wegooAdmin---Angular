import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

import { AllrequestsComponent } from '../../pages/app_allrequests/app_allrequests.component';
import { AppcaptainsComponent } from '../../pages/app_captains/app_captains.component';
import { AppassetsComponent } from '../../pages/app_assets/app_assets.component';
import { Appnewrequests } from '../../pages/app_newrequests/app_newrequests.component';
import { AppreportsComponent } from '../../pages/app_reports/app_reports.component';
import { AppstaffComponent } from '../../pages/app_staff/app_staff.component';
import { AppcaptainsnewComponent } from '../../pages/app_captains_new/app_captains_new.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'app_allrequests',      component: AllrequestsComponent },
    { path: 'app_assets',   component: AppassetsComponent },
    { path: 'app_newrequests',         component: Appnewrequests },
    { path: 'app_reports',          component: AppreportsComponent },
    { path: 'app_captains',           component: AppcaptainsComponent },
    { path: 'app_staff',           component: AppstaffComponent },
    { path: 'app_captains_new',           component: AppcaptainsnewComponent }
];
