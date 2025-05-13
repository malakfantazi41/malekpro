function Animals({items})
{
    return (
        <div>
            <h1>Liste des animaux</h1>
            <ul>{items.map((item,index)=>(<li key={index}>{item}</li>))}</ul>
        </div>
    )
}
export default Animals