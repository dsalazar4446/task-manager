import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "../todo/todo.component";
import { LayoutComponent } from "./layout.component";
import { CreateComponent } from "../create/create.component";
import { UnsavedChangesGuard } from "../../guards/unsaved-changes.guard";

const routes: Routes = [
   {
    path: '',
    redirectTo: 'todo/task',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: LayoutComponent, 
    children:[
      {
        path: 'task',
        component: TodoComponent,
        canDeactivate: [UnsavedChangesGuard]
      },
      {
        path: 'add',
        component: CreateComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}