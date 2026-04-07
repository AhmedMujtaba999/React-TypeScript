import type { PropsWithChildren, ReactNode } from "react"
interface Card2Props extends PropsWithChildren{
    title: string;
    footer?: ReactNode;
    
}


export function Card2({title, children, footer}: Card2Props)
{
    return(
        <section>
            <h2>{title}</h2>
            <div>{children}</div>
            {footer && <footer>{footer}</footer>}
        </section>
    )   
}