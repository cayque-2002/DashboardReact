import './sidebar.css';
import logo from '../../assets/logo.png';

const Sisdebar = ({sidebarOpen, closeSidebar}) => {

    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id ="sidebar">
            <div className="sidebar__tutle">
                <div className="sidebar__img">
                  <img sr={logo} alt="logo"/>
                  <h1>NORD Systems</h1>
                </div>

                <i onClick={() => closeSidebar()}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>
            <div className="siebar__menu">
                <div className ="sidebar__link active_menu_link">
                    <i className = "fa fa-minus-square"></i>
                    <a href="#"></a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebar__link"></div>
                <i className="fa fa-"></i>
                <a href="#">Área administrativa</a>
            </div>
        </div>
    )

}