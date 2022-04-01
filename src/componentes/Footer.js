export const Footer = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((resultado) => {
      console.log(resultado);
      console.log("todo bien");
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <>
      <footer id="page_footer">
        <p>&copy; copyrigth 2022 - Micaela Quijano</p>
        <p> todos los derechos reservados</p>
      </footer>
    </>
  );
};
