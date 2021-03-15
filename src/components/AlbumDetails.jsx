import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AlbumDetails = () => {
    const { album_slug } = useParams({});
    const [album, setAlbum] = useState();
    console.log("slug is",album_slug)

    useEffect(() => {
        (async () => {
            const albumInfo = await fetch (`http://127.0.0.1:3000/entries/${album_slug}`).then(response => response.json());
            setAlbum(albumInfo);
        })();
    },[setAlbum, album_slug]);

    return (
        <>
            {!!album ? 
                (
                    <>
                        <h1>{album.album_name}</h1>
                        <h2>By {album.band_name}</h2>
                        <img src={`${album.cover}`} alt={`${album.album_name} album cover`}/>
                        <hr/>
                        <h3>Comments</h3>
                        <p>{album.comment_message} - {album.stars} Stars</p>
                    </>
                ) : (
                    <p>Getting Album Info</p>
                )
            }
        </>
    )
}

export default AlbumDetails;