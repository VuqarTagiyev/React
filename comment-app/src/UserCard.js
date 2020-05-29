import React from 'react';

const UserCard = (props) => {
    return(
        <div className = 'ui card' style = {{
            width: '550px'
        }}>
            <div className = 'content'>
                <div className = 'header'>
                    Vugar Taghiyev
                </div>
                <div className = 'description'>
                    { props.children }
                    {/* Hello , I am a programmer , I live in Shamkir */}
                </div>
            </div>
            <div className = 'ui bottom button'>
                <i className = 'add icon'></i>
                Add Friend
            </div>
        </div>
    )
}

export default UserCard;