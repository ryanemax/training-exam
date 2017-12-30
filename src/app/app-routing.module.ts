import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'student',
    loadChildren: '../pages/student/student.module#StudentModule',
    // data: { title: "主页" }
  },
  {
    path: 'bigdata',
    loadChildren: './bigdata/bigdata.module#BigdataModule',
  },
  {
    path: 'el-home',
    loadChildren: '../pages/el-bill-manage-system/el-bill-manage-system.module#ElBillManageSystemModule',
  },
  {
    path: 'bookmanage',
    loadChildren: '../pages/bookmanage/bookmanage.module#BookmanageModule',
  },
  {
    path: 'lipstick',
    loadChildren: '../pages/lipstick/lipstick.module#LipstickModule',
  },
  {
    path: 'kqgl',
    loadChildren: '../pages/kqgl/kqgl.module#KqglModule',
  },
  {
    path: 'warehouse-goods',
    loadChildren: '../pages/warehouse-goods/warehouse-goods.module#WarehouseGoodsModule',
  },
  {
    path: 'trips-number',
    loadChildren: '../pages/trips-number/trips-number.module#TripsNumberModule',
  },
  {
    path: 'tgou',
    loadChildren: '../pages/tgou/tgou.module#TgouModule',
  },
  {
    path: 'eightstock',
    loadChildren: '../pages/eightstock/eightstock.module#EightstockModule',
  },
  {
    path: 'lms',
    loadChildren: '../pages/lms/lms.module#LmsModule',
  },
  {
    path: 'ws-goods',
    loadChildren: '../pages/ws-goods/ws-goods.module#WsGoodsModule',
  }
  ,
  {
    path: 'inv-material',
    loadChildren: '../pages/inv-material/inv-material.module#InvMaterialModule',
  },
  {
    path: 'engineeringManagement',
    loadChildren: '../pages/engineeringManagement/engineering-management.module#EngineeringManagementModule',
  },
  {
    path: 'weather-data',
    loadChildren: '../pages/weather-data/weather-data.module#WeatherDataModule',
  }
  ,
  {
    path: 'personal-info',
    loadChildren: '../pages/personal-info/personal-info.module#PersonalInfoModule',
  },
  {
    path: 'cinematicket',
    loadChildren: '../pages/cinematicket/cinematicket.module#CinematicketModule',
  },
    {
      path: 'supplier',
    loadChildren: '../pages/supplier/supplier.module#SupplierModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}