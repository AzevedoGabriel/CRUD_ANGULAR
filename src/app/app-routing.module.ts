import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarComponent } from "./User/listar/listar.component";
import { AdicionarComponent } from "./User/adicionar/adicionar.component";

const routes: Routes = [
  { path: "listar", component: ListarComponent },
  { path: "adicionar", component: AdicionarComponent },
  { path: "editar/:id", component: AdicionarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
