import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="campo-select">
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;