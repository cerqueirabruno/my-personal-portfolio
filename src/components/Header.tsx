import './Header.css'

function Header() {
  return (
    <div>
      <ul className="header-menu">
        <li><a href="#home">HOME</a></li>
        <li><a href="#formacao">FORMAÇÃO</a></li>
        <li><a href="#habilidades">HABILIDADES</a></li>
        <li><a href="#projetos">PROJETOS</a></li>
        <li><a href="#experiencia">EXPERIÊNCIA</a></li>
        <li><a href="#contato">CONTATO</a></li>
      </ul>
    </div>
  );
}

export default Header;