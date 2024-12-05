
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCart } from '../hooks/useCart';



function ItemDetail({nombre, id, img, precio, category, descripcion, stock}) {


  const {addItem, isInCart} = useCart()

  const handleAdd = (count) => {
    const productToAdd = {
      id, nombre, precio, quantity: count
    }
    addItem(productToAdd)
  }

  return (
    <div className='card'>
        <img 
          src={product.img}
          style={{width: 300}}
          className="card-img-top">
        </img>
      
      <div className='card-body'>
        <h2 className='card-title'>{product.nombre}</h2>
        <p className="precio">Precio: ${product.precio}</p>
        <p className="descripcion">Descripción{product.descripcion}</p>
        <p className="category">Categoría{product.category}</p>
        <p className="stock">Stock{product.stock}</p>
      </div>

      {
        isInCart(id) ? (
          <Link to="/cart">Ir al carrito</Link>
        ):
        (
          <ItemCount stock={stock} onAdd={handleAdd}/>
        )
      }

      <div>
        {quantity === 0 ? (
          <ItemCount stock={stock} onAdd={handleAdd} />
        ) : (
          <Link to="/cart">Finalizar Compra</Link>
        )}
      </div>

    </div>
  )
}

export default ItemDetail;