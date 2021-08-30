import React, {useEffect, useState} from 'react'
import Header from '../Header';
import { NavLink } from 'react-router-dom';


const Layout = (props) => {

    const [isExist , setIsExist] = useState(false);

    useEffect(() => {
        if (window.location.pathname == '/visualize') {
            setIsExist(true);
        }
    }, [])

    return (
        <>
        <Header isExist={isExist}/>
        <div className="container-fluid">
                <div className="row">
                    <div className="col col-md-2 sidebar">
                        <ul>
                            <li><NavLink exact to={`/add`}>Add</NavLink></li>
                            <li><NavLink exact to={`/visualize`}>Visualize</NavLink></li>
                        </ul>
                    </div>
                    <div className="col col-md-10" style={{marginLeft: 'auto'}}>
                    {props.children}
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Layout;