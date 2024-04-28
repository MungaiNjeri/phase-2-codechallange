export default function Button({children}){
    function handleClick(value){
        console.log(value)
    }
    return(
        <button onClick={()=>handleClick("handle Click")} className="btn btn-sm btn-danger">{children}</button>
    )
}