import { ArchiveIcon, BackpackIcon, RocketIcon, TokensIcon } from "@radix-ui/react-icons";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css"
function Sidebar() {
    const routes = [
        {
            id: "1",
            title: 'Dashboard',
            path: '/',
            icon: TokensIcon,
            color: "#f706f7"
        },
        {
            id: "2",
            title: 'Loans',
            path: '/loans', 
            icon: BackpackIcon,
            color: "#9816f5"
        },
        {
            id: "3",
            title: 'Loan Request',
            path: '/loan-request',
            icon: RocketIcon,
            color: "gold"
        },
        {
            id:"4",
            title: 'Repayment',
            path: '/repayment',
            icon: ArchiveIcon,
            color:"#11ffeb"
        }
    ]
  return (
      <div className="sidebar">
           <Link to="/"><h1 className = "menu-logo"> Prime Base</h1> </Link>
          { routes.map(route => {
              return ( 
                 
                  <NavLink to={route.path} key={route.id}>
                   
                        <div className = "menu-capsule">
                        <route.icon className = "menu-icon" style = {{color: route.color}} />
                          <h2 className = "menu-name">{route.title}</h2>
                        </div>
                          
               
                  </NavLink>
              )
          })}

    </div>
  )
}

export default Sidebar