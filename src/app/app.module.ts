import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TaskService } from './lib/services/task.service';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';
import { StatusColorPipe } from './lib/pipes/status-color.pipe';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskComponent } from './components/task/task.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CreateComponent } from './components/create/create.component';
import { ToastModule } from './lib/components/toast/toast.module';
import { ModalModule } from './lib/components/modal/modal.module';
import { ComponentsModule } from './lib/components/components.module';
import { LayoutComponent } from './components/layout/layout.component';
import { TabsModule } from "./lib/components/tabs/tabs.module";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    StatusColorPipe,
    TaskFormComponent,
    TaskComponent,
    FiltersComponent,
    CreateComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ComponentsModule,
    TabsModule
],
  providers: [TaskService, UnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
