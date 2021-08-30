import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

const Add = () => {

    const initState = {
        color: '',
        value: '',
        list: '',
    }

    const [inputValue, setInputValue] = useState(initState);
    const [isAdd, setIsAdd] = useState(false);

    const handleChange = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
        let getData = [];   
        if(localStorage.getItem('colorData') !== null) {
            getData = JSON.parse(localStorage.getItem('colorData'));
        }
        getData.push({
            color: inputValue.color,
            value: inputValue.value,
            list: inputValue.list 
        })
        localStorage.setItem('colorData', JSON.stringify(getData))
        setIsAdd(true);
        setTimeout(() => {
            setIsAdd(false);
            setInputValue(initState)
        }, 2000)
        setIsAdd(true);
        
    }

    return (
        <Layout>
            <div style={{margin: '150px 200px'}} className="container">
                <form>
                    <div className="form-group">
                        <div className="row">
                            <div className="col col-md-1">
                                <label for="exampleFormControlInput1">Color :</label>
                            </div>
                            <div className="col col-md-2">
                                <input type="email" onChange={handleChange} value={inputValue.color} name="color" className="form-control" id="exampleFormControlInput1" placeholder="Enter Color" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col col-md-1">
                                <label for="exampleFormControlInput1">Value :</label>
                            </div>
                            <div className="col col-md-2">
                                <input type="email" onChange={handleChange} value={inputValue.value} name="value" className="form-control" id="exampleFormControlInput1" placeholder="Enter Value" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col col-md-1">
                                <label for="exampleFormControlInput1">List :</label>
                            </div>
                            <div className="col col-md-2">
                                <select className="form-control" id="exampleFormControlSelect1" value={inputValue.list} name="list" onChange={handleChange}>
                                    <option>Select List</option>
                                    <option value="1">List 1</option>
                                    <option value="2">List 2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-md-3">
                            <button type="button" onClick={handleClick} className="btn btn-success" style={{ width: '100%' }}>{isAdd ? `Added` : `Add Item`}</button>
                        </div>
                    </div>
                </form>

            </div>
        </Layout>
    )
}

export default Add;