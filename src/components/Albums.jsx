import { useEffects, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import AlbumDetails from './AlbumDetails';

const Albums = () => {
    
    
    
    return (
        <>
            <Route exact path='/'>
                <p>Check one two</p>
            </Route>
            <Route path='/:slug'>
                <AlbumDetails />
            </Route>
        </>
    )
}

export default Albums;