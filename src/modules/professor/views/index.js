import ProfessorController from "../controllers/index.js";
import PromptSync from "prompt-sync";

const input = PromptSync;

class ProfessorView {
    static async criar(nome, matricula, cod_turma) {
        const professor = await ProfessorController.criar(nome, matricula, cod_turma);
        console.table(professor);
    }   

    static async editar(nome, matricula, cod_turma) {
        const professor = await ProfessorController.editar(nome, matricula, cod_turma);
        console.table(professor); 
    }

    static async deletarProfessor(matricula) {
        const professor = await ProfessorController.deletarProfessor(matricula);
        console.table(professor); 
    }   

    static async deletarTodos() {
        await ProfessorController.deletarTodos(); 
    }

    static async listarTodos() {
        const professor = await ProfessorController.listarTodos();
        console.table(professor);
    }

    static async listarPorMatricula(matricula) {
        const professor = await ProfessorController.listarPorMatricula(matricula);
        console.table(professor);
    }

    static async totalProfessores() {
        const total = await ProfessorController.totalProfessores();
        console.table(total);
    }

    static async listarPorTurma(cod_turma) {
        const professor = await ProfessorController.listarPorTurma(cod_turma);
        console.table(professor);
    } 
}

export default ProfessorView;