import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootComponent as overView } from 'src/app/v-overview/root/root.component';
import { RootComponent as roomView } from 'src/app/v-room/root/root.component';

const routes: Routes = [ {

  path:'overview',
  component:overView

}, {

  path:'room',
  component:roomView

}, {
  path:'', component:overView
}, {
  path:'**', component:overView
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
