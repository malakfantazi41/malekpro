function Produit({information,nomstyle})
{

   return (
    <div>
        <h2 style={nomstyle}> designation produti:{information.nom}</h2>
        <h2>prix du produit:{information.prix}</h2>
    </div>
   ) 
}
export default Produit