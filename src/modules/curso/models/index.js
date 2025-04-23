import client from '../../../config/database.js'

class CursoModel{
    static async criar(nome, cod_turma) {
        const dados = [nome, cod_turma]
        const consulta = `insert into curso(nome, cod_turma)
 values($1, $2,) returning *;`
    const resultado = await client.query(consulta, dados)
    return resultado.rows 
}

    static async listarTodos() {
        const consulta = `select * from curso`
        const resultado = await client.query(consulta)
        return resultado.rows
    }

    static async listarPorCod(cod_turma) {
        const dados = [cod_turma]
        const consulta = `select * from aluno where email = $1`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async atualizarCurso(nome, cod_turma) {
        const dados = [nome, cod_turma]
        const consulta = `update professor set nome = $1 where cod_turma = $2 returning *;`
        const resultado = await client.query(consulta,dados)
        return resultado.rows
    } 

    static async deletarCurso(cod_turma) {
        const dados = [cod_turma]
        const consulta = `delete from curso where cod_turma = $1`
        await client.query(consulta, dados)
    }

    static async deletarTodos() {
        const consulta = `delete from curso`
        await client.query(consulta)
    }

    static async totalCurso() {
        const consulta = `select count(cod_turma) as total from curso `
        const resultado = await client.query(consulta)
        return resultado.rows
    }
}

export default CursoModel