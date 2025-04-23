import ProfessorModel from "../models/index.js";

class ProfessorController{
    static async criar(nome, matricula, cod_turma){
        try {
            if(!nome || !matricula){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const professor = await ProfessorModel.criar(nome, matricula, cod_turma);
            console.log('Professor criado com sucesso!');
            return professor;
            
        } catch (error) {
            console.log('Erro ao criar professor', error.message);
        }
    }

    static async editar(nome, matricula, cod_turma){
        try {
            if(!nome || !matricula || !cod_turma){
                return console.log('Todos os campos devem ser preenchidos;');
            }
            const professor = await ProfessorModel.atualizarProfessor(nome, matricula, cod_turma);
            if(professor.length === 0){
                return console.error('Professor não encontrdo.');
            }

            console.log('Professor atualizado com sucesso!');
            return professor;

        } catch (error) {
            console.log('Erro ao atualizar professor', error.message);   
        }
    }

    static async deletarProfessor(matricula){
        try {
            const professor = ProfessorModel.listarPorMatricula(matricula);
            if(professor.length === 0){
                return console.error('Professor não encontrado.');
            }

            await ProfessorModel.deletarProfessor(matricula);
            console.log('Professor excluído com sucesso!');


        } catch (error) {
            console.log('Erro ao deletar professor', error.message);
        }
    }

    static async deletarTodos(){
        try {
            await ProfessorModel.deletarTodos();
            console.log('Professores deletados com sucesso!');
        } catch (error) {
            console.log('Erro ao deletar professor', error.message);
        }
    }

    static async listarTodos(){
        try {
            const professores = await ProfessorModel.listarTodos();
            if(professores.length === 0){
                return console.log('Nenhum usuário a ser exibido!');
            }
            console.log('Listagem de professores: ');
            return professores;
        } catch (error) {
            console.log('Erro ao listar professores', error.message);
        }
    }

    static async listarPorMatricula(matricula){
        try {
            const professor = await ProfessorModel.listarPorMatricula(matricula);
            if(professor.length === 0){
                return console.error('Professor não encontrado!');
            }
            console.log('Professor: ');
            return professor;
        } catch (error) {
            console.log('Erro ao listar professor', error.message);
        }
    }

    static async totalProfessores(){
        try {
            const total = await ProfessorModel.totalProfessores();
            if(total.length === 0){
                return console.error('Não há professores a serem exibidos.');
            }
            return total;

        } catch (error) {
            console.log('Erro ao encontrar professores', error.message);
        }
    }
}

export default ProfessorController;