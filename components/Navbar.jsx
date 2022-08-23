import styles from '../styles/Navbar.module.css'
import { ActiveLink } from './ActiveLink';

const menuItems = [
    {
        link: '/',
        name: 'home'
    },
    {
        link: '/about',
        name: 'about'
    },
    {
        link: '/contact',
        name: 'contact'
    },
    {
        link: '/pricing',
        name: 'pricing'
    },
];

export const Navbar = () => {
    return (
        <nav className={styles['menu-container']}>
            {
                menuItems.map((item, index) => (<ActiveLink key={index} link={item.link} name={item.name} />))
            }
        </nav>
    )
}
