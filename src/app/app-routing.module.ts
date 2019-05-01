import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

// These are lazy-loaded routes - note that we dynamic-import the modules here
// to avoid having an eager dependency on them.

// IMPORTANT: this array is auto-updated by script/generator
// dont rename the 'routes' variable.
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home').then(m => m.HomeModule)
  },
  {
    path: 'hello',
    pathMatch: 'full',
    loadChildren: () =>
        import('./hello-world/hello-world.module').then(m => m.HelloWorldModule)
  },
  {
    path: 'todos',
    pathMatch: 'full',
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
  },
    {
    path: 'billing',
    pathMatch: 'full',
    loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule)
    },
    {
    path: 'compute',
    pathMatch: 'full',
    loadChildren: () => import('./compute/compute.module').then(m => m.ComputeModule)
    },
    {
    path: 'datastore',
    pathMatch: 'full',
    loadChildren: () => import('./datastore/datastore.module').then(m => m.DatastoreModule)
    },
    {
    path: 'functions',
    pathMatch: 'full',
    loadChildren: () => import('./functions/functions.module').then(m => m.FunctionsModule)
    },
    {
    path: 'logging',
    pathMatch: 'full',
    loadChildren: () => import('./logging/logging.module').then(m => m.LoggingModule)
    },
    {
    path: 'monitoring',
    pathMatch: 'full',
    loadChildren: () => import('./monitoring/monitoring.module').then(m => m.MonitoringModule)
    },
    {
    path: 'networking',
    pathMatch: 'full',
    loadChildren: () => import('./networking/networking.module').then(m => m.NetworkingModule)
    },
    {
    path: 'registry',
    pathMatch: 'full',
    loadChildren: () => import('./registry/registry.module').then(m => m.RegistryModule)
    },
    {
    path: 'storage',
    pathMatch: 'full',
    loadChildren: () => import('./storage/storage.module').then(m => m.StorageModule)
    },
    {
    path: 'support',
    pathMatch: 'full',
    loadChildren: () => import('./support/support.module').then(m => m.SupportModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // TODO: maybe set this based on devmode?
    enableTracing: true,
    // preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
