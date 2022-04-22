import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./storage";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Sin contexto de cart");
  }
  return context;
};

export const CartProvider = (props) => {
  const [productosAgregados, setProductosAgregados] = useLocalStorage('carrito', []);
  const [cantidadTotalDeProductos, setCantidadTotalDeProductos] = useLocalStorage('carrito_contador', 0);
  const [precioTotalDeProductos, setPrecioTotalDeProductos] = useLocalStorage('carrito_precio', 0);

  const modificarCantidadDeProducto = (productoModificado) => {
    const indexProducto = productosAgregados.findIndex(
      (producto) => producto.itemId === productoModificado.itemId
    );
    if (indexProducto !== -1) {
      productosAgregados.splice(indexProducto, 1, productoModificado);
      setProductosAgregados(productosAgregados);
      totalDeProductosAgregados();
      calcPrecioTotal();
    }
  };

  const agregarProductosAlCarrito = (nuevaCantidad, item, size = null) => {
    const productoEncontrado = productosAgregados.find((producto) => {
      if (size) {
        return size === producto.size && producto.itemId === item.itemId;
      } else {
        return producto.itemId === item.itemId;
      }
    });

    if (productoEncontrado !== undefined) {
      const productoModificado = {
        ...productoEncontrado,
        cantidad: nuevaCantidad,
      };
      modificarCantidadDeProducto(productoModificado);
    } else {
      productosAgregados.push({
        ...item,
        cantidad: nuevaCantidad,
        size: size,
      });
      setProductosAgregados(productosAgregados);
      totalDeProductosAgregados();
      calcPrecioTotal();
    }
  };

  const eliminarProductoDelCarrito = (item) => {
    const productoEncontrado = productosAgregados.find((producto) => {
      if (item.size) {
        return item.size === producto.size && producto.itemId === item.itemId;
      } else {
        return producto.itemId === item.itemId;
      }
    });

    if (productoEncontrado !== undefined) {
      const indexProducto = productosAgregados.findIndex((producto) => {
        if (productoEncontrado.size) {
          return (
            productoEncontrado.size === producto.size &&
            producto.itemId === productoEncontrado.itemId
          );
        } else {
          return producto.itemId === productoEncontrado.itemId;
        }
      });
      if (indexProducto !== -1) {
        productosAgregados.splice(indexProducto, 1);
        setProductosAgregados(productosAgregados);
        totalDeProductosAgregados();
        calcPrecioTotal();
      }
    }
  };

  const totalDeProductosAgregados = () => {
    const cantidadDeProductosAgregados = productosAgregados.map(
      (producto) => producto.cantidad
    );
    const total = cantidadDeProductosAgregados.reduce((a, b) => a + b, 0);
    setCantidadTotalDeProductos(total);
  };

  const calcPrecioTotal = () => {
    const preciosDeProductosAgregados = productosAgregados.map(
      (producto) => producto.cantidad * producto.price
    );
    const total = preciosDeProductosAgregados.reduce((a, b) => a + b, 0);
    setPrecioTotalDeProductos(total);
  };

  const valorDelContexto = useMemo(
    () => ({
      productosAgregados,
      cantidadTotalDeProductos,
      precioTotalDeProductos,
      modificar: modificarCantidadDeProducto,
      agregar: agregarProductosAlCarrito,
      eliminar: eliminarProductoDelCarrito,
    }),
    [productosAgregados, cantidadTotalDeProductos]
  );

  return <CartContext.Provider value={valorDelContexto} {...props} />;
};
