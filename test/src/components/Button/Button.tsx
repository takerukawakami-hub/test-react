import style from "./Button.module.css"


// propsのデータの型を定義
interface ButtonProps {
    type?: "submit" | "reset" | "button" ;
    disabled?: boolean;
    onClick:any;
    children:any;
}

function Button(props: ButtonProps) {
    
    const{type, disabled, onClick, children} = props;

    return (
        <button className ={style.button} type={type} disabled={disabled}  onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;

