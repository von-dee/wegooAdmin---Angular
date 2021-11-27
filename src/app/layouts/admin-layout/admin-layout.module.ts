import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
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


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    AllrequestsComponent,
    AppcaptainsComponent,
    AppassetsComponent,
    Appnewrequests,
    AppreportsComponent,
    AppstaffComponent,
    AppcaptainsnewComponent
  ]
})

export class AdminLayoutModule {}
