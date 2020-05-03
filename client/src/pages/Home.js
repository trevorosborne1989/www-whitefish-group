import React from 'react';
import {H1, H3}  from './visuals';
import useCustomFetch from '../Hooks/useCustomFetch';


function Home() {
    const [data] = useCustomFetch('/api/hello');
    
    
    return <>
    <H1>Home</H1>
    <H3>Welcome to the Whitefish Group of AA</H3>
    {/* <ul>
        {data.map(g => (
            <li>
                {g}
            </li>
        ))}
    </ul> */}
    <h4>{data ? data.express : "No"}</h4>
    </>
}

export default Home;