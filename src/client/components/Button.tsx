import './Button.css';

interface ButtonProps {
    children: any,
    className?: string,
    onClick?: (e: any) => void
}

export function Button({ children, className, onClick }: ButtonProps) {
    return (
        <button onClick={(e) => {if (onClick) onClick(e)}} className={`rounded purple p-1 btn-purple ${className ? className : ''}`} style={{outline: "none"}}>{children}</button>
    )
}