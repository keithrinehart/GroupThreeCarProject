import React, {useState, useEffect} from 'react';
import {client} from '../client';
import Posts from './Posts';


export default function Shop () {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        client
          .getEntries()
          .then((res) => setArticles(res.items))
          .catch(() => console.log("Error"));
    
      }, []);

    return (
        <div className='wrapper'>
        <Posts posts={articles} />
      </div>
    );
}
