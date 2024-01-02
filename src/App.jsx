
import Datastore from 'nedb';
import {useEffect, useState} from "react";

import db from './services/database.service';

function App() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        db.getAllValues((values) => {
            setItems(values);
        })

    }, []);

    return (
        <>
            aa test

            {items.map((item, index) => (
                <div key={index}>
                    {item.name}
                </div>
            ))}
        </>
    )
}

export default App
