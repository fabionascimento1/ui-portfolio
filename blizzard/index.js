const Header = (
    <header>
      <div className='header container'>
        <a href="index.html" className="logo">
            <img src="./assets/logo.svg" alt="Logo da Blizzard" title="Logo da Blizzard" />
        </a>
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
        <div className='menu'>
          <a href="#" className="btn btn-outline">Criar conta</a>
          <a href="#" className="btn btn-primary">
              <img src="./assets/icon-perfil.svg" className="" alt="Icone de Login" title="Icone de Login" />
              Logar
          </a>
          <a href="#" className="btn-mobile" id="js-btn-menu-mobile">
            <img src="./assets/icon-hamburguer.svg" alt="botão menu" title="botão menu" />
          </a>
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
    {Header}
    {Footer}
  </div>
)

ReactDOM.render(
    page,
    document.getElementById("root")
)