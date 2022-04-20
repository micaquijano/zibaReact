import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Sin contexto de cart");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [productosAgregados, setProductosAgregados] = useState([]);
  const [cantidadTotalDeProductos, setCantidadTotalDeProductos] = useState(0);

  useEffect(() => {
    totalDeProductosAgregados();
  }, [productosAgregados]);

  const modificarCantidadDeProducto = (productoModificado) => {
    const indexProducto = productosAgregados.findIndex(
      (producto) => producto.itemId === productoModificado.itemId
    );
    if (indexProducto !== -1) {
      let productosAgregadosCopy = productosAgregados;
      productosAgregadosCopy.splice(indexProducto, 1, productoModificado);
      setProductosAgregados(productosAgregadosCopy);
    }
  };

  const agregarProductosAlCarrito = (nuevaCantidad, item) => {
    const productoEncontrado = productosAgregados.find(
      (producto) => producto.itemId === item.itemId
    );

    if (productoEncontrado !== undefined) {
      const productoModificado = {
        ...productoEncontrado,
        cantidad: nuevaCantidad,
      };
      modificarCantidadDeProducto(productoModificado);
    } else {
      let productosAgregadosCopy = productosAgregados;
      productosAgregadosCopy.push({ ...item, cantidad: nuevaCantidad });
      setProductosAgregados([]);
      setProductosAgregados(productosAgregadosCopy);
    }
  };

  const totalDeProductosAgregados = () => {
    const cantidadDeProductosAgregados = productosAgregados.map(
      (producto) => producto.cantidad
    );
    const total = cantidadDeProductosAgregados.reduce((a, b) => a + b, 0);
    setCantidadTotalDeProductos(total);
  };

  const valorDelContexto = useMemo(
    () => ({
      productosAgregados,
      cantidadTotalDeProductos,
      modificar: modificarCantidadDeProducto,
      agregar: agregarProductosAlCarrito,
    }),
    [productosAgregados, cantidadTotalDeProductos]
  );

  return (
    <CartContext.Provider value={valorDelContexto}>
      {children}
    </CartContext.Provider>
  );
};
