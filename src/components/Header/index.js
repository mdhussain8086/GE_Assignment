import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({isExist}) => {

    const [sortBy, setSortBy] = useState('');

    const handleSortBy = (e) => {
        setSortBy(e.target.value);
        localStorage.setItem('sortData', JSON.stringify(e.target.value))
        window.location.reload();
    }

    useEffect(() => {
        setSortBy(JSON.parse(localStorage.getItem('sortData')));
    }, [sortBy])


    const changeSort = () => {
        if(localStorage.getItem('colorData') !== null) {
            const getData = JSON.parse(localStorage.getItem('colorData'));
        let updateData = [];
        if (sortBy == 'isColor') {
            updateData =  getData?.sort((a, b) => a.color.localeCompare(b.color));
        }else {
            updateData =  getData?.sort((a, b) => a.value-b.value);
        }
        localStorage.setItem('colorData', JSON.stringify(updateData))
        }
        
    }

    useEffect(() => {
        changeSort();
    }, [sortBy])


    return (

        <nav className="navbar navbar-dark bg-primary" style={{ zIndex: 1 }}>
            <div className="container-fluid">
                <div className="row align-items-center" style={{ width: '100%' }}>
                    <div className="col col-md-9">
                        <NavLink className="navbar-brand" to={'/add'}>ListApp</NavLink>
                    </div>
                   {isExist &&  <div className="col col-md-2">
                        <select id="exampleFormControlSelect1" name="sortBy" 
                        value={sortBy} onChange={handleSortBy}
                        >
                            <option>Sort By</option>
                            <option value="isValue">Value</option>
                            <option value="isColor">Color Name</option>
                        </select>

                    </div>}
                </div>
            </div>
        </nav>

    )
}

export default Header;
