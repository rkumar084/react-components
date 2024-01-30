import 'bulma/css/bulma.css' 

export default function ProfileCard({title, handle, image}) {
       
  return( 
    <div className="card">
        <div className="card-image">
            <figure class="image is-4by3">
            <img src={image} alt="Placeholder image"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media-content">
                <p className='title is-4'>{title}</p>
                <p className='subtitle is-6'>{handle}</p>
            </div>
        </div>
    </div>   
  );
}
