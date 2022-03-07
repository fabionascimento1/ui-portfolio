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

const Sslide = (
  <section className='s-slide'>
    <div className='s-slide__main'>
      <div className='swiper-wrapper'>

        <div className="swiper-slide slide-01">
          <div className="container">
            <div className="left-content">
                <h2>Retorna à escuridão com o game Diablo IV</h2>
                  <p>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
                  <button className="btn btn-primary">
                      <img src="./assets/icon-perfil.svg" alt="Icone de perfil" title="Icone de perfil" />
                      Jogar agora
                  </button>
            </div>
            <div className="right-content">
                <div className="logo">
                    <img src="./assets/logo-default-diablo-iv.png" alt="" />
                </div>
                <div className="video">
                    <span>Assista o trailer</span>
                </div>
            </div>
          </div>
        </div>

        <div className="swiper-slide slide-02">
          <div className="container">
            <div className="left-content">
                <h2>Novo pacote de expansão de Hearthstone</h2>
                  <p>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
                  <button className="btn btn-primary">
                      <img src="./assets/icon-perfil.svg" alt="Icone de perfil" title="Icone de perfil" />
                      Jogar agora
                  </button>
            </div>
            <div className="right-content">
                <div className="logo">
                    <img src="./assets/logo-default-diablo-iv.png" alt="" />
                </div>
                <div className="video">
                    <span>Assista o trailer</span>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
)

const Sgames = (
  <section className='s-games'>
    <div className='container'>
      <div className='s-games__header'>
        <div className='s-games__header__title'><h2>Jogos exclusivos</h2></div>
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
        <div className="s-games__header__allgames">
          <a href="">
              <img src="./assets/ver-todos.svg" alt="Ver todos" />
              Ver todos jogos
          </a>
        </div>
      </div>

      <div className='s-games__cards'>
        <div className='s-games__cards__card'>
          <div class="s-games__cards__card__image">
              <img src="./assets/card-game-01.jpg" alt="Diablo" />
          </div>
          <div class="s-games__cards__card__info">
              <h3>Diablo II: Resurrected</h3>
              <span>RPG de ação</span>
          </div>
        </div>

        <div className='s-games__cards__card'>
          <div class="s-games__cards__card__image">
              <img src="./assets/card-game-02.jpg" alt="Diablo" />
          </div>
          <div class="s-games__cards__card__info">
              <h3>Diablo II: Resurrected</h3>
              <span>RPG de ação</span>
          </div>
        </div>

        <div className='s-games__cards__card'>
          <div class="s-games__cards__card__image">
              <img src="./assets/card-game-03.jpg" alt="Diablo" />
          </div>
          <div class="s-games__cards__card__info">
              <h3>Diablo II: Resurrected</h3>
              <span>RPG de ação</span>
          </div>
        </div>

        <div className='s-games__cards__card'>
          <div class="s-games__cards__card__image">
              <img src="./assets/card-game-04.jpg" alt="Diablo" />
          </div>
          <div class="s-games__cards__card__info">
              <h3>Diablo II: Resurrected</h3>
              <span>RPG de ação</span>
          </div>
        </div>

        <div className='s-games__cards__card'>
          <div class="s-games__cards__card__image">
              <img src="./assets/card-game-05.jpg" alt="Diablo" />
          </div>
          <div class="s-games__cards__card__info">
              <h3>Diablo II: Resurrected</h3>
              <span>RPG de ação</span>
          </div>
        </div>

      </div>
    </div>
  </section>
)

const Sdownloads = (
  <section className='s-downloads'>
    <div className='container s-downloads__dflex'>
      <div className='s-downloads__dflex__description'>
        <img src="./assets/battlenet.svg" alt="Battlenet" title="Battlenet" />
        <h2>Baixe agora o battle.net</h2>
        <ul>
            <li>
                <div className="icon">
                    <img src="./assets/icon-seus-jogos.svg" alt="" />
                </div>
                <p>Seus jogos em um só lugar</p>
            </li>
            <li>
                <div className="icon"><img src="./assets/icon-conect.svg" alt="" /></div>
                <p>Conecte-se aos seus amigos</p>
            </li>
            <li>
                <div className="icon"><img src="./assets/icon-buy.svg" alt="" /></div>
                <p>Compre jogos e itens digitais</p>
            </li>
        </ul>
        <a href="" className="btn btn-primary">
            <div className="icon">
                <img src="./assets/icon-apple.svg" alt="Apple" />
            </div>
            Baixar para o MacOS
        </a>
        <div className="app">
            <img className="icon" src="./assets/icon-phone.svg" alt="" />
            <p>Também disponível como <a href="#">aplicativo móvel</a></p>
        </div>
      </div>
      <div className='s-downloads__dflex__images'>
        <img src="./assets/image-download-lg.png" className="img-lg" alt="Imagem download" />
        <img src="./assets/image-download-sm.png" className="img-sm" alt="Imagem download menor" />
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
    {Sslide}
    {Sgames}
    {Sdownloads}
    {Footer}
  </div>
)

ReactDOM.render(
    page,
    document.getElementById("root")
)