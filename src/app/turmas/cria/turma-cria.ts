// importação dos componentes do próprio Angular
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

// importação do toastr, que é o responsável por retornar mensagens na tela
import { ToastrService } from 'ngx-toastr';

// importação dos serviços de cada componente
import { AlunoService } from '../../alunos/crud/aluno.service';
import { ProfessorService } from '../../professores/crud/professor.service';
import { DisciplinaService } from '../../disciplinas/crud/disciplina.service';
import { TurmaService } from '../crud/turma.service';

// importação dos modelos de cada classe
import { Professor } from '../../professores/crud/professor.model';
import { Aluno } from '../../alunos/crud/aluno.model';

// Definição dos arquivos do componente da turma
@Component({
  selector: 'app-turma-cria',
  templateUrl: './turma-cria.html',
  styleUrls: ['./turma-cria.css']
})
export class TurmaCriaComponent implements OnInit {
  // Váriáveis
  listaProfessores: any; // tipo any retorna qualquer coisa
  listaDisciplinas: any; // tipo any retorna qualquer coisa
  listaAlunos: any; // tipo any retorna qualquer coisa
  isEdicao = false; // variável criada para aparecer html na tela apenas quando estiver na tela de edição

  constructor(
    // Instanciando serviços e guardando cada um em uma variável
    private turmaService: TurmaService,
    private tostr: ToastrService,
    private professorService: ProfessorService,
    private disciplinaService: DisciplinaService,
    private alunoService: AlunoService
  ) {
    // aqui a variável "listaProfessores" recebe a lista de professores que a função getData retorna, ela está no serviço do professor
    this.listaProfessores = professorService.getData();
    // o mesmo com lista Disciplinas
    this.listaDisciplinas = disciplinaService.getData();

    // guarda dados todos os alunos na váriavel "dadosAluno"
    const dadosAluno = this.alunoService.getData();
    // aqui é usa o subscribe para pegar os dados de todos os alunos, que é guardado na variável "item"
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

    const dadosProfessor = this.professorService.getData();
    dadosProfessor.snapshotChanges().subscribe(item => {
      this.listaProfessores = [];
      item.forEach(element => {
        const dadosProfessorJson = element.payload.toJSON();
        dadosProfessorJson['$codigoProfessor'] = element.key;
        this.listaProfessores.push(dadosProfessorJson as Professor);
      });
    });

    const dadosDisciplina = this.disciplinaService.getData();
    dadosDisciplina.snapshotChanges().subscribe(item => {
      this.listaDisciplinas = [];
      item.forEach(element => {
        const dadosDisciplinaJson = element.payload.toJSON();
        dadosDisciplinaJson['$codigoDisciplina'] = element.key;
        this.listaDisciplinas.push(dadosDisciplinaJson as Professor);
      });
    });
  }

  // função que é executada após os elementos HTML estarem na tela
  ngOnInit() {
    // depois que os elementos HTML estão na tela o formulário é limpo
    this.resetarFormulario();
  }

  // função que é executada quando o formulário é submitado
  submitarFormulario(turmaForm: NgForm) {
    // se não tiver o ID da Turma no formulário ele saberá que é um novo registro
    if (turmaForm.value.$codigoTurma == null) {
      // é buscado o método inserirTurma no serviço da Turma, passando como parâmetro os valores de cada campo do formulário
      this.turmaService.inserirTurma(turmaForm.value);
      // mensagem de sucesso na inserção da turma
      this.tostr.success('Turma salva com sucesso.');
    } else {
      // caso já tenha o ID da turma no formulário ele saberá que é uma alteração e irá buscar o método que altera
      this.turmaService.alterarTurma(turmaForm.value);
      // mensagem retornada de alteração
      this.tostr.success('Alteração salva.');
    }
    // após inserir/alterar o formulário é limpo novamente
    this.resetarFormulario(turmaForm);
  }

  // função que limpa todos os campos do formulário
  resetarFormulario(turmaForm?: NgForm) {
    turmaForm.reset();
    // preenche o formulário com todos os dados null
    this.turmaService.turmaSelecionada = {
      $codigoTurma: null,
      nome: '',
      professorId: null,
      disciplinaId: null,
      listaAlunos: null
    };
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
