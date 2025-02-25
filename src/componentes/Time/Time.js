import Colaborador from '../Colaborador/Colaborador';
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: hexToRgba(props.time.cor, '0.6') }}>
            <input value={props.time.cor} type='color' className='input-cor' onChange={evento => props.mudarCor(evento.target.value, props.time.id)}/>
            <h3 style={{ borderColor: props.time.cor }}>{props.time.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return <Colaborador
                        key={colaborador.id}
                        corFundo={props.time.cor}
                        colaborador={colaborador}
                        aoDeletar={props.aoDeletar}
                    />
                } )}
            </div>
        </section>
    )
}

export default Time;