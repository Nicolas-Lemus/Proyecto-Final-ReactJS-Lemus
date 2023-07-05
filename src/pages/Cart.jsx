import React, { useContext } from "react";
import { collection, getDoc, doc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import CartDetailCard from "../components/CartDetailCard/CartDetailCard";
import Headers from "../components/Headers/Headers";
import DotSpinner from "../animations/DotSpinner ";
import Error from "../error/Error"


const fetchProductsByIds = async (ids) => {
  const db = getFirestore();
  const tecnologiaRefs = ids.map((id) => doc(collection(db, "tecnologia"), id));
  const tecnologiaSnapshots = await Promise.all(
    tecnologiaRefs.map((tecnologiaRef) => getDoc(tecnologiaRef))
  );

  const tecnologia = tecnologiaSnapshots.map((tecnologiaSnapshot) => {
    if (tecnologiaSnapshot.exists()) {
      return { id: tecnologiaSnapshot.id, ...tecnologiaSnapshot.data() };
    } else {
      return null;
    }
  });
  return tecnologia.filter((product) => product !== null);
};

const Cart = () => {
  const [error, setError] = React.useState(false);
  const [productsData, setProductsData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const {count} = useContext(CartContext);

  React.useEffect(() => {
    const ids = count.tecnologia.map((product) => product.productId);
    fetchProductsByIds(ids)
      .then((res) => {
        setProductsData(res);
      })
      .catch(() => setError(true))
      .then(() => setLoading(false));
  }, [count]);

  return loading ? (
    <DotSpinner/>
  ) : error ? (
    <Error/>
  ):(
    <div>
      <Headers HeadersH1="Carrito🛒"/>
      <div className="shoppingCart">
        {productsData.map((product) => (
          <CartDetailCard
            key={product.id}
            product={product}
            quantity={count.tecnologia.find((item) => item.productId === product.id)}
          />
        ))}
      </div>
    </div>
    
  );
};

export default Cart;

