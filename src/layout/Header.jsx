import "../style.sass";
import "../font-ico.css";

function Header() {
  return <header>
    <div className="nameSite">
      Movie forever
    </div>
    <ol className="myContact">
      <li><a href="#" className="icon-github"></a></li>
      <li className="padding-left-10px"><a href="#" className="icon-telegram"></a></li>
    </ol>
  </header> 
}

export {Header};