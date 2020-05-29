import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './img/1.png';
import profile2 from './img/2.png';
import profile3 from './img/3.png';
import UserCard from './UserCard';


const App = () => {
    return(
        <div className = 'comments' style = {{
            border: '2px solid #aeaeae',
            display: 'inline-block',
            padding: '10px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <UserCard>
                <SingleComment 
                name = 'Vugar' 
                date = 'Today at 5:00pm'
                text = 'it s great'
                profile = { profile1 }
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                name = 'Alex' 
                date = 'Today at 8:00pm'
                text = 'Thank you!'
                profile = { profile2 }
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                name = 'Jack' 
                date = 'Today at 7:00pm'
                text = 'it is amazing.!'
                profile = { profile3 }
                />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)