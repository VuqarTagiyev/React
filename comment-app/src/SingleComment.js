import React from 'react';

const SingleComment = (props) => {
    return (
        <div className = 'comment' style = {{
            display: 'flex',
            padding: '5px',
            alignItems: 'center',
            width: '500px',
            height: '120px',
            margin: '5px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <a href = '/'>
                <img src = { props.profile } alt='profile' style = {{
                    width: '100px',
                    height: '100px',
                    padding: '10px'
                }}/> 
            </a>
            <div className = "content" style = {{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '30px',
                width: '100%'                    
            }}>
                <div className = 'contentTop' style = {{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                    fontSize: '25px'                        
                }}>
                    <p className = 'author' style = {{
                        margin: '0'
                    }}>
                        { props.name }
                    </p>
                    <p className = 'metadate' style = {{
                        margin: '0',
                        color: '#aeaeae',
                        fontSize: '20px'
                    }}>
                        { props.date }
                    </p>
                </div>
                <div className = 'commentTsext' style = {{
                    marginTop: '20px'
                }}>
                    { props.text }
                </div>
            </div>
        </div>  
    )
}

export default SingleComment;