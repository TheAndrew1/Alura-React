import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    const aoSelecionado = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    
    return (
        <div className="campo-select">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={aoSelecionado}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;