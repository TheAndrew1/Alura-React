import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai';

const Colaborador = ({colaborador, corFundo, aoDeletar}) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle className='deletar' size={25} onClick={() => aoDeletar(colaborador.id)} />
            <div className='cabecalho' style={{ backgroundColor: corFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;