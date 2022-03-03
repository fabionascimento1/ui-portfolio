const Header = (
    <header>
      <div className='container'>Header</div>
    </header>
)

const Footer = (
  <header className="footer">Footer 1234</header>
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