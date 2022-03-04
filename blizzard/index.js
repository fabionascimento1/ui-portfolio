let EventLoop = 0

function menuActive(){
  const menu = document.getElementById('menu-mobile')
  const btnMenuToggle = document.getElementById('btn-menu-toggle')
  
  if(EventLoop == 0){   
    menu.classList.add('menu-mobile-active')
    btnMenuToggle.title = 'close menu'
    btnMenuToggle.classList.add('menu-toggle-close')
    EventLoop = 1
  } else {
    menu.classList.remove('menu-mobile-active')
    btnMenuToggle.title = 'open menu'
    btnMenuToggle.classList.remove('menu-toggle-close')
    EventLoop = 0
  }
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
            <div className='menu-toggle' id='div-menu-toogle'>
              <button id='btn-menu-toggle' onClick={menuActive} type='button' title='open menu'>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
)

const Sgames = (
  <section className='s-games'>
    <div className='container'>
      <div className='s-games__header'>
        <h2>Jogos exclusivos</h2>
        <ul>
          <li>
            <a href="#" className="active">
                <img src="./assets/icon-logo.svg" alt="Battle net" />
            </a>
          </li>
          <li>
              <a href="#">
                  <img src="./assets/nintendo.svg" alt="Nintendo" />
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="./assets/icon-xbox.svg" alt="XBOX" />
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="./assets/ps.svg" alt="Playstion" />
              </a>
          </li>
        </ul>
        <a href="" className="s-games__header__allgames">
            <img src="./assets/ver-todos.svg" alt="Ver todos" />
            Ver todos jogos
        </a>
      </div>
    </div>
  </section>
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
    {Sgames}
    {Footer}
  </div>
)

ReactDOM.render(
    page,
    document.getElementById("root")
)