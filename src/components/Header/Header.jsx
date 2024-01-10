
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';




function Header() {
    return (
        <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <h1>Vite + React</h1>
      </div>


    );
};

export default Header;