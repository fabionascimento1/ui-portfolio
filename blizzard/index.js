function menuActive(){
  const menu = document.getElementById('menu-mobile')
  menu.classList.add('menu-mobile-active')
}

function closeMenu(){
  const menu = document.getElementById('menu-mobile')
  menu.classList.remove('menu-mobile-active')
}

const menu = (
  <nav>
    <ul>
      <li>
        <a href="#">
            Jogos
            <img src="./assets/arrow-down.svg" alt="Icone de seta" title="Icone de seta" />
        </a>
      </li>
      <li>
        <a href="#">
            Esportes
            <img src="./assets/arrow-down.svg" alt="Icone de seta" title="Icone de seta" />
        </a>
      </li>
      <li>
        <a href="#">
            Loja
        </a>
      </li>
      <li>
        <a href="#">
            Notícias
        </a>
      </li>
      <li>
        <a href="#">
            Suporte
        </a>
      </li>
    </ul>
  </nav>
)
const btnCTAs = (
  <div className='btn-ctas'>
    <a href="#" className="btn btn-outline">Criar conta</a>
    <a href="#" className="btn btn-primary">
        <img src="./assets/icon-perfil.svg" className="" alt="Icone de Login" title="Icone de Login" />
        Logar
    </a>
  </div>
)

const menuMobile = (
  <div className='menu-mobile' id='menu-mobile'>
    <div className='overlay'>
      <aside>
        <a onClick={closeMenu} alt='Close menu' className='close' id="close">X</a>
        {menu}
        <div className='btn-ctas'>{btnCTAs}</div>
      </aside>
    </div>
  </div>
)

const Header = (
    <header>
      <div className='container'>
        <div className='header'>
          <a href="index.html" className="logo">
              <img src="./assets/logo.svg" alt="Logo da Blizzard" title="Logo da Blizzard" />
          </a>
          {menu}
          <div className='menu'>
            {btnCTAs}
            <a onClick={menuActive} href="#" className="btn-mobile" id="js-btn-menu-mobile">
              <img src="./assets/icon-hamburguer.svg" alt="botão menu" title="botão menu" />
            </a>
          </div>
        </div>
      </div>
    </header>
)

const Footer = (
  <footer>
    <div className='container'>footer</div>
  </footer>
)

const page = (
  <div>
    {menuMobile}
    {Header}
    {Footer}
  </div>
)

ReactDOM.render(
    page,
    document.getElementById("root")
)