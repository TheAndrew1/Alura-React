import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Colaborador = ({colaborador, corFundo, aoDeletar, aoFavoritar}) => {
    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle className='deletar' size={25} onClick={() => aoDeletar(colaborador.id)} />
            <div className='cabecalho' style={{ backgroundColor: corFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito ? <AiFillHeart {...propsFavorito} color='#FF0000' /> : <AiOutlineHeart {...propsFavorito} />}
                </div>
            </div>
        </div>
    )
}

export default Colaborador;