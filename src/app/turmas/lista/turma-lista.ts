import { Component, OnInit } from '@angular/core';

// importando toastr, que é um plugin de mensagens
import { ToastrService } from 'ngx-toastr';

// importando models
import { Turma } from '../crud/turma.model';
import { Aluno } from '../../alunos/crud/aluno.model';

// Serviços
import { TurmaService } from '../crud/turma.service';
import { AlunoService } from '../../alunos/crud/aluno.service';
import { ProfessorService } from '../../professores/crud/professor.service';
import { DisciplinaService } from '../../disciplinas/crud/disciplina.service';


@Component({
  selector: 'app-turma-lista', // nome da tag html
  templateUrl: './turma-lista.html', // arquivo html deste componente
  styleUrls: ['./turma-lista.css'] // arquivo css deste componente
})
export class TurmaListaComponent implements OnInit {
  // variáveis
  turmasLista: Turma[];
  listaAlunos: any;

  constructor(
    private tostr: ToastrService,
    private turmaService: TurmaService,
    private alunoService: AlunoService,
    private professorService: ProfessorService,
    private disciplinaService: DisciplinaService,
  ) {
    // no constructor ele já lista as turmas
    this.listaTurmas();
    const dadosAluno = this.alunoService.getData();
    dadosAluno.snapshotChanges().subscribe(item => {
      // torna a váriavel "lista Alunos" em um array
      this.listaAlunos = [];
      // é feito um forEach para pegar cada informação de cada aluno
      item.forEach(element => {
        // transforma os elementos do forEach em JSON e guarda na variável "dadosAlunoJson"
        const dadosAlunoJson = element.payload.toJSON();
        // é guardado em $codigoAluno o seu próprio ID
        dadosAlunoJson['$codigoAluno'] = element.key;
        // é implementado na variável "listaAlunos" os dados em JSON de acordo com o model Aluno
        this.listaAlunos.push(dadosAlunoJson as Aluno);
      });
    });
   }

  ngOnInit() {
    this.turmaService.turmaSelecionada = {
      $codigoTurma: null,
      nome: '',
      professorId: null,
      disciplinaId: null,
      listaAlunos: null
    };
  }

  listarAlunos(turma: Turma) {
    this.turmaService.turmaSelecionada = Object.assign({}, turma);
  }

  editarTurma(turma: Turma) {
    this.turmaService.turmaSelecionada = Object.assign({}, turma);
  }

  deletarTurma(codigoTurma: string) {
    // verificação de exclusão
    if (confirm('Deseja realmente excluir este registro?') === true) {
      // caso confirme a turma é deletada
      this.turmaService.deletarTurma(codigoTurma);
      // após ser deletada a mensagem é mostrada
      this.tostr.success('Registro deletado.');
    }
  }

  async listaTurmas() {
    const dadosTurmas = this.turmaService.getData();
    dadosTurmas.snapshotChanges().subscribe(item => {
      this.turmasLista = [];
      item.forEach(async element => {
        const y = element.payload.toJSON();
        // retorna id do professor
        const p = await this.professorService.professorById(y['professorId']);
        const d = await this.disciplinaService.disciplinaById(y['disciplinaId']);
        const t = await this.turmaService.alunoByTurma();

        const listaDeAlunos = [];
        const valores = t.val();

        for (const key in valores) {
          if (valores[key].turmaId === element.key) {
            listaDeAlunos.push(valores[key].alunoId);
          }
        }

        y['$codigoTurma'] = element.key;
        y['dadosProfessor'] = p.val();
        y['dadosDisciplina'] = d.val();
        y['alunos'] = this.listaAlunos;
        y['listaAlunos'] = listaDeAlunos;

        this.turmasLista.push(y as Turma);
      });
    });
  }

  // verifica se o aluno está alocado na turma
  isAlocado(alunoId) {
    // a variável "listaTurma" recebe a lista de alunos daquela turma
    const listaDaTurma = this.turmaService.turmaSelecionada.listaAlunos;
    if (listaDaTurma.indexOf(alunoId) !== -1) {
      return true;
    }
    return false;
  }

  // aloca aluno na turma
  alocarAluno(aluno: any, idTurma) {
    // variável que guarda o ID do aluno
    const alunoId = aluno.$codigoAluno;
    // aloca aluno
    this.turmaService.alocarAlunoTurma(alunoId, idTurma);
    this.turmaService.turmaSelecionada.listaAlunos.push(aluno.$codigoAluno);
  }
}
