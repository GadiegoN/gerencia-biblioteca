import { useState } from "react";
import { UserPlus, FilePlus, Plus, X } from 'phosphor-react';
import { Button, Close, Footer, HomeContainer, Main, Menu, Table, Td } from "./style";
import { CadastroAlunos } from "../../components/formAlunos";
import { CadastroLivros } from "../../components/formLivros";
import { CadastroDevolucoes } from "../../components/formDevolucao";

export function HomePage() {
    const [page, setPage] = useState('devolucao');
    const [cadastro, setCadastro] = useState('');

    function setPageAluno() {
        setPage('aluno')
    }

    function setPageLivro() {
        setPage('livro')
    }

    function setPageDevolve() {
        setPage('devolucao')
    }

    function setCadastroAluno() {
        setCadastro('aluno')
    }

    function setCadastroLivro() {
        setCadastro('livro')
    }

    function setCadastroDevolucao() {
        setCadastro('devolucao')
    }

    return (
      <HomeContainer>
        <Menu>
            <Button onClick={setPageAluno}>Alunos</Button>
            <Button onClick={setPageLivro}>Livros</Button>
            <Button onClick={setPageDevolve}>Devolução</Button>
        </Menu>
        <Main>
            {page === 'aluno' && (
                <Table>
                    <thead>
                        <th>Aluno</th>
                        <th>Série</th>
                    </thead>
                    <tbody>
                        <tr>
                            <Td>Nome 01</Td>
                            <Td>5ª</Td>
                        </tr>
                        <tr>
                            <Td>Nome 02</Td>
                            <Td>7ª</Td>
                        </tr>
                        <tr>
                            <Td>Nome 03</Td>
                            <Td>8ª</Td>
                        </tr>
                    </tbody>
                </Table>
            )}

            {page === 'livro' && (
                <Table>
                    <thead>
                        <th>livro</th>
                        <th>Série</th>
                        <th>qnt</th>
                    </thead>
                    <tbody>
                        <tr>
                            <Td>Nome 01</Td>
                            <Td>5ª</Td>
                            <Td>5</Td>
                        </tr>
                        <tr>
                            <Td>Nome 02</Td>
                            <Td>7ª</Td>
                            <Td>7</Td>
                        </tr>
                        <tr>
                            <Td>Nome 03</Td>
                            <Td>8ª</Td>
                            <Td>8</Td>
                        </tr>
                    </tbody>
                </Table>
            )}

            {page === 'devolucao' && (
                <Table>
                    <thead>
                        <th>aluno</th>
                        <th>livro</th>
                        <th>data</th>
                    </thead>
                    <tbody>
                        <tr>
                            <Td>Nome 01</Td>
                            <Td>Nome 01</Td>
                            <Td>01/12/2022</Td>
                        </tr>
                        <tr>
                            <Td>Nome 02</Td>
                            <Td>Nome 02</Td>
                            <Td>01/12/2022</Td>
                        </tr>
                        <tr>
                            <Td>Nome 03</Td>
                            <Td>Nome 03</Td>
                            <Td>01/12/2022</Td>
                        </tr>
                    </tbody>
                </Table>
            )}  
        </Main>
        <Footer>
            {page === 'aluno' && (
                <Button onClick={setCadastroAluno}>Novo Aluno <UserPlus /></Button>
            )}

            {page === 'livro' && (
                <Button onClick={setCadastroLivro}>Novo Livvro <FilePlus /></Button>
            )}

            {page === 'devolucao' && (
                <Button onClick={setCadastroDevolucao}>Novo Emprestimo <Plus /></Button>
            )}
        </Footer>
        
        {cadastro === 'aluno' && (
            <Footer>
                <CadastroAlunos />
                <Close onClick={() => setCadastro('')}><X /></Close>
            </Footer>
        )}
        
        {cadastro === 'livro' && (
            <Footer>
                <CadastroLivros />
                <Close onClick={() => setCadastro('')}><X /></Close>
            </Footer>
        )}
        
        {cadastro === 'devolucao' && (
            <Footer>
                <CadastroDevolucoes />
                <Close onClick={() => setCadastro('')}><X /></Close>
            </Footer>
        )}
        
      </HomeContainer>
    )
  }