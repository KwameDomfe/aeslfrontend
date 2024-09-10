import menuClose from '../../../svgs/menu/close-svgrepo-com_1.svg'
import menuOpen from '../../../svgs/menu/burger-menu-svgrepo-com.svg'

const MenuToggle = (props) => {
    // Props
    const {onClick, toggleMenu} = props

    return (
        <figure id="menu__Toggle"
            className="flex items-center justify-center 
                w2-50 h2-50 pa0-25 ba b--white-90 br0-50 pointer
                "
            onClick={onClick}
            title = "Menu Toggle"
        >
            <img src = {toggleMenu ? menuOpen : menuClose}
                alt="Menu Toggle"
                className=""
            />
        </figure>
    )
}

export default MenuToggle