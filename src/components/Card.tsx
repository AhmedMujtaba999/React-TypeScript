interface Cardprop{ // defining the type for the props that the Card component will receive
    name: string;
    price: number;
    isSpecial?: boolean;
}
export function Card({name,price, isSpecial = false}: Cardprop)// cardpop is the type of the
//  props that the Card component will receive, 
// and we are using destructuring to extract the name, price, and isSpecial properties from the props object.
//  We also set a default value of false for isSpecial in case it is not provided when the component is used.
{ 
    return(
        <article>
            <h2> 
                {name} {isSpecial && <span> ✨- Special Offer!</span>}
            </h2>
            <p>{price}</p>
        </article>
    )
}