import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function EditProductPage(props) {
  const [productToUpdate, setProductToUpdate] = useState(null);

  const { products, setProducts } = props;

  console.log("products in EditProduct");
  console.log(products);

  const location = useLocation();

  //TODO: Write code to set the productToUpdateState
  //with the product data from the location.
  //
  //Use useEffect so that when the location changes
  //you get the product data from the location. See
  //ViewProductPage.js to check

  useEffect(() => {
    if (location.state) {
      console.log("Juhu");
      //Get the product from the state object
      //from the location
      const { product } = location.state;
      console.log("In use effect");
      console.log(product);
      setProductToUpdate(product);
    }
  }, [location]);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const updatedProducts = products.map((thisProduct) => {
      if (thisProduct.id === productToUpdate.id) {
        return productToUpdate;
      }
      return thisProduct;
    });
    console.log("updatedProducts");
    console.log(updatedProducts);
    setProducts(updatedProducts);

    console.log("Products after update");
    console.log(products);
  }

  if (!productToUpdate) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={productToUpdate.name}
      />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditProductPage;
