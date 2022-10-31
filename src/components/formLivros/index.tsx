import { CadastroContainer, TextInput, Button } from "./styles";

export function CadastroLivros() {

    return (
      <CadastroContainer>
        <TextInput placeholder="Nome do aluno" />
        <TextInput placeholder="Série do aluno" />
        <Button>Cadastrar</Button>
      </CadastroContainer>
    )
}