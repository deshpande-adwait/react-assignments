import React from 'react';

const userOutput = (props) => {
    return (
        <div style={props.styling}>
            <p>This is {props.userName}.</p>
        </div>
    );
}

export default userOutput;