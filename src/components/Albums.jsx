import { useEffect, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import AlbumDetails from './AlbumDetails';

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const history = useHistory();
    
    useEffect(() => {
        (async () => {
            const albumData = await fetch('http://127.0.0.1:3000/entries').then(response => response.json());
            setAlbums(albumData);
        })();
    },[]);

    return (
        <>
            {!!albums.length ? (
                <>
                    <Route exact path='/'>
                        <ul>
                            {albums.map((album, index) => (
                                <li key={index}>
                                    <Link to={`/entries/${album.slug}`}>{album.album_name} - {album.band_name}</Link>
                                </li>
                            ))}
                        </ul>
                    </Route>
                    <Route path='/entries/:album_slug'>
                        <AlbumDetails />
                        <br/>
                        <button type='button' onClick={() => history.goBack()}>Go Back</button>
                    </Route>
                </>
            ) : (
                <p>Loading CEOs...</p>
            )}
        </>
    );
};

export default Albums;