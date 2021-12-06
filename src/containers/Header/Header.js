import React, { useState }  from 'react';
import Media from 'react-media';
import Logo from '../../UI/Fotos/Logo';
import HeaderNav from '../../components/Header/HeaderNav';
import HeaderNavSmall from '../../components/Header/HeaderNavSmall';


function Header(props) {

    const [flagOpen, setFlagOpen] = useState(false);

    const hendlerOpenNavBar = () => {
        setFlagOpen(prev => !prev);
    }
    return (
        <>
            <div className='header_wrapper'>

                <Logo />

                <Media queries={{
                    small: "(max-width: 699px)",
                    medium: "(min-width: 700px) and (max-width: 900px)",
                    large: "(min-width: 901px)"
                }}>
                    {matches => (
                        <>
                            {matches.small && <HeaderNavSmall flagOpen={flagOpen} onclick={hendlerOpenNavBar}/>}
                            {matches.medium && <HeaderNav classname='header_nav__navigation_large'/>}
                            {matches.large && <HeaderNav classname='header_nav__navigation_large'/>}
                        </>
                    )}
                </Media>
            </div>
            {
                flagOpen ?
                    <HeaderNav
                        classname='header_nav__navigation_small'
                    />
                    : null
            }
        </>
    )
}

export default Header

