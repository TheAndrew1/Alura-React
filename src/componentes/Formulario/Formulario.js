import "./Formulario.css"
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import { useState } from "react";

const Formulario = ({ aoCadastrarTime, aoCadastrar, times }) => {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const [nomeTIme, setNomeTIme] = useState("");
    const [cor, setCor] = useState("");

    const aoSalver = (evento) => {
        evento.preventDefault();
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        });
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalver}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time" itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault();
                aoCadastrarTime({nome: nomeTIme, cor: cor});
                setNomeTIme("");
                setCor("");
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <CampoTexto 
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTIme}
                    aoAlterado={valor => setNomeTIme(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={cor}
                    aoAlterado={valor => setCor(valor)}
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;