import Iframe from "react-iframe";

export const Footer = () => {
  return (
    <>
      <footer id="page_footer">
          <div class="footer-social-link">
            <ul>
            <h3>Contactanos</h3>
              <li>
                <a href="https://www.facebook.com/">
                  <i class="bi bi-facebook "></i>ValkyryaProductos</a>
              </li>
              <li>
                <a href="https://www.twtter.com/">
                  <i class="bi bi-twitter"></i>ValkyryaProductos</a>
              </li>
              <li>
                <a href="https://www.instagram.com/"><i class="bi bi-instagram"></i>ValkyryaProductos</a>
              </li>
              <li text->
                <a href="https://mail.google.com/"><i class="bi bi-envelope"></i>info@ValkyryaProductos.org</a>
              </li>
            </ul>
            <div>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.126705607443!2d-58.413852426297076!3d-34.58479111782507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1650324491635!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
            </div>
          </div>
          <p className="text-Footer">
            &copy; copyrigth 2022 - Valkyrya Productos. Todos los derechos
            reservados.
          </p>
      </footer>
    </>
  );
};
