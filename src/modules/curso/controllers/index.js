import TurmaModel from "../models/index.js";

class TurmaController{
    static async criar(cod_turma, nome_turma){
        try {
            if(!cod_turma || !nome_turma){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const turma = await TurmaModel.criar(cod_turma, nome_turma);
            console.log('Turma criada com sucesso!');
            return turma;

        } catch (error) {
            console.error(error);
        }
    }

    static async editar(cod_turma, nome_turma){
        try {
            if(!cod_turma || !nome_turma){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const turma = await TurmaModel.atualizarTurma(cod_turma, nome_turma);
            if(turma.length === 0){
                return console.error('Turma não encontrada.');
            }

            console.log('Turma atualizada com sucesso!');
            return turma

        } catch (error) {
            console.log('Erro ao atualizar turma', error.message);
        }
    }

    static async deletarTurma(cod_turma){
        try {
            const turma = TurmaModel.listarPorCod(cod_turma);
            if(turma.length === 0){
                return console.error('Turma não encontrada.');

            }
            await TurmaModel.deletarTurma(cod_turma);
            console.log('Turma excluída com sucesso!');

        } catch (error) {
            console.log('Erro ao deletar turma', error.message);
        }
    }

    static async deletarTodas(){
        try {
            await TurmaModel.deletarTodos();
            console.log('Turmas deletadas com sucesso!');
        } catch (error) {
            console.log('Erro ao deletar turma', error.message);
        }
    }

    static async listarTodas(){
        try {
            const turmas = await TurmaModel.listarTodos();
            if(turmas.length === 0){
                return console.log('Nenhuma turma a ser exibida!');
            }
            console.log('Listagem de turmas: ');
            return turmas;
        } catch (error) {
            console.log('Erro ao listar turmas', error.message);
        }
    }

    static async listarPorCodigo(cod_turma){
        try {
            const turma = await TurmaModel.listarPorCod(cod_turma);
            if(turma.length === 0){
                return console.log('Turma não encontrada!');
            }
            console.log('Turma: ');
            return turma;
        } catch (error) {
            console.log('Erro ao listar turma', error.message);
        }
    }

    static async totalAlunosPorTurma(cod_turma){
        try {
            const total_aluno_turma = await TurmaModel.totalAlunosPorTurma(cod_turma);
            if(total_aluno_turma.length === 0){
                return console.log('Nenhum aluno encontrado!');
            }
            console.log('Total de alunos por turma: ');
            return total_aluno_turma;
        } catch (error) {
            console.log('Erro ao listar alunos por turma', error.message);
        }
    }

    static async listarAlunosPorTurma(cod_turma){
        try {
            const alunos = await TurmaModel.listarAlunosPorTurma(cod_turma);
            if(alunos.length === 0){
                return console.log('Nenhum aluno encontrado!');
            }
            console.log('Alunos por curso: ');
            return alunos;
        } catch (error) {
            console.log('Erro ao listar alunos por curso', error.message);
        }
    }


    static async listarProfessoresPorTurma(cod_turma){
        try {
            const professores = await TurmaModel.listarProfessoresPorTurma(cod_turma);
            if(professores.length === 0){
                return console.log('Nenhum professor encontrado!');
            }
            console.log('Professores por turma: ');
            return professores;
        } catch (error) {
            console.log('Erro ao listar professores por turma', error.message);
        }
    }

}

export default TurmaController;