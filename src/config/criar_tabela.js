import dotenv from 'dotenv'
dotenv.config()
import client from './database.js'

class CriarTabela {
    static async aluno() {
    const consulta = `create table if not exists aluno(
        nome varchar(100) not null,
        email varchar(100) not null unique,
        matricula char(5) not null,
        telefone char(11) not null,
        cod_turma char(3) references turma(cod_turma)
    );`
    await client.query(consulta)
    console.log("Tabela aluno criada com sucesso!")
    }
    static async professor() {
    const consulta = `create table if not exists professor(
    nome varchar(100) not null,
    matricula char(5) not null unique,
    cod_turma char(3) references turma(cod_turma)
    );`
    await client.query(consulta)
    console.log("Tabela professor criada com sucesso!")
    }
    static async turma() {
    const consulta = `create table if not exists turma(
        cod_turma char(3) primary key,
        nome_turma varchar(60) not null
    );`
    await client.query(consulta)
    console.log("Tabela turma criada com sucesso!")
    }
}

export default CriarTabela