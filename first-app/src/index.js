import React from 'react';
import ReactDOM from 'react-dom';

function Nav(){
    const a = {text : 'salam'};
    return(
        <div className = 'nav'
        style = {{
            background: 'skyblue',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px'
        }}>
            <div className = 'logo'
            style = {{
                width: '80px',
                height: '70px',
                background: 'yellow',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                overflow: 'hidden'
            }}>
                {a.text}
            </div>
            <div className = 'menu'>
                <ul className = 'menu-list'
                style = {{
                    listStyle: 'none',
                    display: 'flex'
                }}>
                    <li className = 'list-item'
                    style = {{
                        padding: '10px 20px',
                        fontSize: '25px',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: 'bold'
                    }}>Home</li>
                    <li className = 'list-item'
                    style = {{
                        padding: '10px 20px',
                        fontSize: '25px',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: 'bold'
                    }}>Portfolio</li>
                    <li className = 'list-item'
                    style = {{
                        padding: '10px 20px',
                        fontSize: '25px',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: 'bold'
                    }}>About</li>
                    <li className = 'list-item'
                    style = {{
                        padding: '10px 20px',
                        fontSize: '25px',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: 'bold'
                    }}>Contact</li>
                </ul>
            </div>
        </div>
    )
}


const App = () => {
    return(
        <div>
            <Nav />
        </div>
    )
}



ReactDOM.render(
    <App />,
    document.querySelector('#root')
)