import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_apparance, characters }) => {

    return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card'>
            
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img src={ heroImages(`./${ id }.jpg`) } className='card-img' alt={ superhero } />
                </div>
                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{ superhero }</h5>
                        <p className='card-text'>{ alter_ego }</p>

                        {
                            ( alter_ego !== characters ) &&
                                <p className='text-muted'>{ characters }</p>
                        }

                        <p className='card-text'>
                            <small className='text-muted'>{ first_apparance }</small>
                        </p>

                        <Link to={ `/hero/${ id }` }>
                            Más...
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
