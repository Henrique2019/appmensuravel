import { Component, OnInit } from '@angular/core';
import { SubGrupoModel } from 'src/app/models/sub-grupo-model';
import { ClustService } from 'src/app/service/clust.service';
import { NgForm } from '@angular/forms';
import { Button } from 'protractor';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  Clust = {} as SubGrupoModel;
  Clusts: SubGrupoModel[];

  trackById(index: number, Clust: ClustService): number { return Clust._id; }
  constructor(private ClustService: ClustService) {}


  ngOnInit() {
    this.getClusts();
  }

  // defini se um Item será criado ou atualizado
  saveClusts(form: NgForm) {
    if (this.Clust._id !== undefined) {
      this.ClustService.updateClusts(this.Clust).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.ClustService.saveClusts(this.Clust).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os Item
  getClusts() {
    this.ClustService.getClusts().subscribe((Clusts: SubGrupoModel[]) => {
      this.Clusts = Clusts;
    });
  }

  // deleta um Item
  deleteClusts(Clust: SubGrupoModel) {
    this.ClustService.deleteClusts(Clust).subscribe(() => {
      this.getClusts();
    });
  }

  // copia o Item para ser editado.
  editClusts(Clust: SubGrupoModel) {
    this.Clust = { ...Clust };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getClusts();
    form.resetForm();
    this.Clust = {} as SubGrupoModel;
  }

}
