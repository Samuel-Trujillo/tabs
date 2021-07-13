import React, {useState} from 'react';


const Tab = (props) => {
    const [clickTab, setClickTab] = useState("")


    const onClickHandler = (e, value) => {
        setClickTab(value);
    }

    return (
        <div>
            {
                props.tabs.map( (tab, i) => {
               return <button key={i} onClick={ (e) => onClickHandler(e, tab) }>Tab {i+1}</button>
            })
            }
            <h2>{clickTab}</h2>
        </div>
    )
}


export default Tab;


