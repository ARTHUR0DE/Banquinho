import TurmaController from "../controllers/index.js";
import PromptSync from "prompt-sync";

const input = PromptSync();

class TurmaView{
    static async criar(){
        const cod_turma = input("Digite o código da turma: ");
        const nome_turma = input("Digite o nome da turma: ");
        const turma = await TurmaController.criar(nome_turma,cod_turma);
        console.table(turma);
    }

    static async editar(){
        const nome_turma = input("Digite o novo nome da turma: ");
        const turma = await TurmaController.editar(nome_turma);
        console.table(turma);
    }
    static async deletarTurma(){
        const cod_turma = input("Digite o código da turma: ");
        const turma = await TurmaController.deletarTurma(cod_turma);
        console.table(turma)
    }

    static async deletarTodas(){
        await TurmaController.deletarTodas();
    }

    static async listarTodas(){
        const turma = await TurmaController.listarTodas();
        console.table(turma);
    }

    static async listarPorCodigo(){
        const cod_turma = input("Digite o código da turma: ");
        const turma = await TurmaController.listarPorCodigo(cod_turma);
        console.table(turma);
    }

    static async totalAlunosPorTurma(){
        const cod_turma = input("Digite o código da turma: ");
        const total = await TurmaController.totalAlunosPorTurma(cod_turma);
        console.log(`Total de alunos na turma ${cod_turma}: ${total}`);
    }
    static async totalAlunosPorTurma(){
        const cod_turma = input("Digite o código da turma: ");
        const total = await TurmaController.totalAlunosPorTurma(cod_turma);
        console.log(`Total de alunos na turma ${cod_turma}: ${total}`);
    }
    static async listarAlunosPorTurma(){
        const cod_turma = input("Digite o código da turma: ");
        const alunos = await TurmaController.listarAlunosPorTurma(cod_turma);
        console.table(alunos);
    }

    static async listarProfessoresPorTurma(){
        const cod_turma = input("Digite o código da turma: ");
        const professores = await TurmaController.listarProfessoresPorTurma(cod_turma);
        console.table(professores);
    }
}

export default TurmaView;