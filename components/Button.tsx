import Image from "next/image"


type ButtonProps = {
    type: 'button' | 'submit',
    text: string,
    icon?: string,
    variant: 'btn_dark_green' | 'btn_green' | 'btn_white_text',
}


const Button = ({type, text, icon, variant}: ButtonProps) => {
  return (
    <button type={type}
    className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
        {icon && <Image src={icon} alt={text} width={24} height={24} />}
        <span className="block bold-16 whitespace-nowrap">{text}</span>
    </button>
  )
}

export default Button