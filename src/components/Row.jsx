import Button from "./Button"
export default function Row({date, description, category, amount}){
    return(
        
        <tr>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td> 
            
            <td>
                <Button>
                    <span>Delete</span>
                </Button>
            </td>
           
        </tr>
        
    )
}