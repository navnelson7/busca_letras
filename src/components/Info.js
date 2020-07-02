import React from 'react';
const Info = ({informacion}) => {
    if (Object.keys(informacion.length === 0)) return null;

    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artista
            </div>
            <div className="card-body">
                <img src={informacion.strArtistThumb} />
            </div>
        </div>
     );
} 
 
export default Info;