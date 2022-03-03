const Header = (
  <header>Header 4343</header>
)

const Footer = (
  <header>Footer 1234</header>
)

const page = (
    <div>
        {Header}
        <div className="footer">{Footer} </div>
    </div>
)

console.log(page)

ReactDOM.render(
    page,
    document.getElementById("root")
)