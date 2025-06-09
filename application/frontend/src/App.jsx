
import { use } from 'react';
import './App.css'
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Product from '../../backend/model/productModel';


function App() {     
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  })

  return ( <>
  <Grid container spacing={2}>
    {products.map((product) => ( 
        <Grid>
          <ProductCard key={product._id} product={product} />
        </Grid>
    ))}
  </Grid>
  </>);
}

export default App
