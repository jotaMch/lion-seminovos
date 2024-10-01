interface InputComponentProps {
    width?: string;
    height?: string;
    border?: string;
    radius?: string;
    type?: string;
    onSearch?: (value: string) => void;
    place?: string;
}

export const Input: React.FC<InputComponentProps> = (props) => {

    const InputStyled = {
        width: props.width,
        height: props.height,
        border: props.border,
        borderRadius: props.radius,
        fontSize: "18px",
        paddingLeft: "8px"
    };

    // Passando uma função que captura o evento corretamente
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onSearch) {
            props.onSearch(e.target.value);
        }
    };

    return (
        <input
            style={InputStyled}
            type={props.type}
            onChange={handleChange} 
            placeholder={props.place}
            required
        />
    );
};
