import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
const Contact  = () => {
    return(
        <div>
            <div className = 'ui raised very padded text container segment' style={{
            marginTop:'80px'
            }}>
            <Link to = '/card/alex' className = 'ui header'>Alex </Link>
            <p>lorem dsnjd akdk askd akd akd as dkad jkads kads ashdasdkahsd ahjd   </p>
        </div>
        <Modal/>
        <div className = 'ui raised very padded text container segment' style={{
            marginTop:'80px'
            }}>
            <Link to = '/card/willma' className = 'ui header'>Willma </Link>
            <p>lorem dsnjd akdk askd akd akd as dkad jkads kads ashdasdkahsd ahjd   </p>
        </div>
        </div>
    )
}

export default Contact ;