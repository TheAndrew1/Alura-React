import "./CampoTexto.css"

const CampoTexto = ({obrigatorio, label, placeholder}) => {
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input required={obrigatorio} placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto;