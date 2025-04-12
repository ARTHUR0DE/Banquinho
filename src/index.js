import AlunoView from "./modules/aluno/views/index.js"
import PromptSync from "prompt-sync"

const input = PromptSync()

// const nome = input("Digite o nome do aluno: ")
// const email = input("Digite o email do aluno: ")
// const matricula = input("Digite a matricula do aluno: ")
// const telefone = input("Digite o telefone do aluno: ")
// const cod_turma = input("Digite o codigo da turma do aluno: ")
// AlunoView.criar(nome, email, matricula, telefone, cod_turma)

// AlunoView.listarTodos()
// AlunoView.listarPorEmail(email)
// AlunoView.editarAluno(nome, email, matricula, telefone, cod_turma)
AlunoView.totalAlunos()