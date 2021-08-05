import "./footer.css";

export function Footer() {
   return (
      <>
         <footer className="footer-nav nav-dark ">
            <h5>made by pruthvirajmv @neoGcamp</h5>
            <ul className="nav-list">
               <li>
                  <a
                     href="https://github.com/pruthvirajmv/quiz-app/tree/development"
                     target="_blank"
                     rel="noreferrer">
                     <i className="fa fa-github fa-lg" aria-hidden="true"></i>
                  </a>
               </li>

               <li>
                  <a
                     href="https://www.instagram.com/youneedit.codeit/"
                     target="_blank"
                     rel="noreferrer">
                     <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                  </a>
               </li>

               <li>
                  <a href="https://twitter.com/pruthviraj528" target="_blank" rel="noreferrer">
                     <i className="fa fa-twitter-square" aria-hidden="true"></i>
                  </a>
               </li>
            </ul>
            <p className="text-gray text-small">© 2021 BaddyMart</p>
         </footer>
      </>
   );
}
