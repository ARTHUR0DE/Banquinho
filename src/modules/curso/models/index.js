import client from '../../../config/database.js'

class TurmaModel{
    static async criar(nome_turma, cod_turma) {
        const dados = [nome_turma, cod_turma]
        const consulta = `insert into turma(nome_turma, cod_turma)
 values($1, $2) returning *;`
    const resultado = await client.query(consulta, dados)
    return resultado.rows 
}

    static async listarTodos() {
        const consulta = `select * from turma`
        const resultado = await client.query(consulta)
        return resultado.rows
    }

    static async listarPorCod(cod_turma) {
        const dados = [cod_turma]
        const consulta = `select * from aluno where cod_turma = $1`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async atualizarTurma(nome_turma, cod_turma) {
        const dados = [nome_turma, cod_turma]
        const consulta = `update turma set nome_turma = $1 where cod_turma = $2 returning *;`
        const resultado = await client.query(consulta,dados)
        return resultado.rows
    } 

    static async deletarTurma(cod_turma) {
        const dados = [cod_turma]
        const consulta = `delete from turma where cod_turma = $1`
        await client.query(consulta, dados)
    }

    static async deletarTodos() {
        const consulta = `delete from turma`
        await client.query(consulta)
    }

    static async totalAlunosPorTurma(cod_turma) {
        const dados = [cod_turma]
        const consulta = `select count(aluno.cod_turma) as total_aluno_turma from turma
            join aluno on turma.cod_turma = aluno.cod_turma
            where aluno.cod_turma = $1`
        const total_aluno_turma = await client.query(consulta, dados)
        return total_aluno_turma
    }

    static async listarAlunosPorTurma(cod_turma) {
        const dados = [cod_turma]
        const consulta = `select aluno.nome, turma.nome_turma from turma
            join aluno on turma.cod_turma = aluno.cod_turma 
            where aluno.cod_turma = $1`
        const resultado = await client.query(dados,consulta)
        return resultado.rows
    }

    static async listarProfessoresPorTurma(cod_turma) {
        const dados = [cod_turma]
        const consulta = `select professor.nome, turma.nome_turma from curso 
            join professor on turma.cod_turma = professor.cod_curso
            where professor.cod_turma = $1`
        const resultado = await client.query(dados,consulta)
        return resultado.rows
    }

    static async
}

export default TurmaModel