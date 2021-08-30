import { NavLink } from "react-router-dom";

export function Headers() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>

                    <img
                        src="https://i.pinimg.com/736x/1a/08/7e/1a087e4a9c2a1c729a0ca6b9491b3830--star-logo-rick-and-morty.jpg"
                        alt="logo" className='header__logo'/>

                    <nav className='header__menu'>
                        <NavLink to={'/character'}>Character</NavLink>
                        <NavLink to={'/location'}>Location</NavLink>
                        <NavLink to={'/episode'}>Episode</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}
