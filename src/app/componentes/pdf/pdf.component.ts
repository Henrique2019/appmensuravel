import { Component, ViewChild, ElementRef  } from '@angular/core';
import { SubGrupoModel } from 'src/app/models/sub-grupo-model';
import { ClustService } from 'src/app/service/clust.service';
import html2pdf from 'html2pdf.js';
import * as jsPDF from 'jspdf'
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-pdf',
  templateUrl:'./pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})

export class PdfComponent  {

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
  downloadPDF() {
    var element = document.getElementById('content');
    var opt = {
      margin:[15, 10, 40, 40],
      filename:     'persona.pdf',
      image:        { type: 'jpeg'},
      html2canvas:  { },
      jsPDF:        {orientation: 'p' }
    };

    html2pdf().set(opt).from(element).save();

  }
}
