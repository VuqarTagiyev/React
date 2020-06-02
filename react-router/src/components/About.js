import React from 'react';
import '../Modal.css';
const About = () => {
    return(
        <div>
            <div className = 'modal'>
                <div className = 'modal-content'>
                    I am a modal
                </div>
            </div>
            <div className = 'ui raised very padded text container segment' style={{
                marginTop:'80px'
            }}>
                <h3 className = 'ui header'>About</h3>
                <p>lorem dsnjd akdk askd akd akd as dkad jkads kads ashdasdkahsd ahjd   </p>
            </div>
        </div>
    )
}

export default About;