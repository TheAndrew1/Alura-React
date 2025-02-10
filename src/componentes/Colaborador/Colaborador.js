import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai';

const Colaborador = ({nome, cargo, imagem, corFundo, aoDeletar}) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle className='deletar' size={25} onClick={aoDeletar} />
            <div className='cabecalho' style={{ backgroundColor: corFundo }}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;