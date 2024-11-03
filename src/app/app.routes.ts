import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PostComponent } from './post/post.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { ReviewComponent } from './review/review.component';
import { AppointmentComponent } from './appointment/appointment.component';

export const routes: Routes = [
    // { path: '', redirectTo: '', },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'aboutUs', component: AboutUsComponent },
    { path: 'post', component: PostComponent },
    { path: 'patientInfo', component: PatientInfoComponent },
    { path: 'review', component: ReviewComponent },
    { path: 'appointment', component: AppointmentComponent },
    // { path: 'aboutUs', component: AboutUsComponent },
    // { path: 'aboutUs', component: AboutUsComponent },
    { path: '**', component: PageNotFoundComponent },
];
