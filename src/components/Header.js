
import logo from '../WittyLogo.png';

const Header = (props) => {
    const { setAppStep} = props;

    return (
    <header>
        <button onClick={() => setAppStep(0)} />
            {/* <img src={logo} alt='logo' /> */}
    </header>
    );
};

export default Header;