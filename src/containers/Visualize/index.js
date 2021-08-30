import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';


const Visualize = () => {

    const [leftValue, setLeftValue] = useState([]);
    const [rightValue, setRightValue] = useState([]);

    const getData = () => {
        const StringData = localStorage.getItem('colorData');
        const parseData = JSON.parse(StringData);
        const customDataLeft = [];
        const customDataRight = [];
        parseData?.map(item => {
            if (item.list == 1) {
                customDataLeft.push(item);
            }else {
                customDataRight.push(item);
            }
        })
        setLeftValue(customDataLeft);
        setRightValue(customDataRight);
        
    }

    useEffect(() => {
        getData();
    }, [localStorage.getItem('colorData')])
    ;

 
    const liftBtn = (value) => {
        const filterData = leftValue.filter((data) => data.value !== value)
        setLeftValue(filterData)
        setRightValue([...rightValue, {value}])
        const getData = JSON.parse(localStorage.getItem('colorData'));
        const update = getData?.filter(item => {
            if(item.value == value) {
                item.list = "2"
            }
            return item
        })
        localStorage.setItem('colorData', JSON.stringify(update))
        
    }

    const rightBtn = (value) => {
        const filterData = rightValue.filter((data) => data.value !== value)
        setRightValue(filterData)
        setLeftValue([...leftValue, {value}])
        const getData = JSON.parse(localStorage.getItem('colorData'));
        const update = getData?.filter(item => {
            if(item.value == value) {
                item.list = "1"
            }
            return item
        })
        localStorage.setItem('colorData', JSON.stringify(update))
    }

    

    return(
        <Layout>
            <div style={{margin: '150px 20px'}} className="container">
                <div className="d-flex justify-content-around">
                    <div>
                    <p className="ml-5 mb-5" >List 1</p>
                    {
                       leftValue?.map((item, index) => {
                            return(
                                <div key={index} className="d-flex mb-4">
                                <button type="button" className="btn lift-side-list mr-3" style={{background: `${item.color}`}}>{item.value}</button>
                                <button type="button" className="btn right-side-list" onClick={() => liftBtn(item.value)}><i class='fas fa-angle-double-right'></i></button>
                                </div>
                            )
                        })
                    }
                    
                    
                    </div>
                    <div>
                    <p className="mb-5 text-right mr-5" >List 2</p>
                    {
                       rightValue?.map((item, index) => {
                            return(
                                <div key={index} className="d-flex mb-4">
                                    <button type="button" className="btn right-side-list mr-3" onClick={() => rightBtn(item.value)}><i class='fas fa-angle-double-left'></i></button>
                                    <button type="button" className="btn lift-side-list" style={{background: `${item.color}`}}>{item.value}</button>
                                </div>
                            )
                    })
                    }
                    
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Visualize;