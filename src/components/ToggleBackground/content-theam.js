/*eslint-disable*/

import React, { useContext } from 'react';
import './ToggleBackground.scss'
import { Button } from 'react-bootstrap';

import { ThemeContext } from '../../views/context/TheamContainer.js';

function Content(props) {
    const themeContext = useContext(ThemeContext);

    return (
        <>
                <Button style={{borderColor: "none" , marginLeft: "225px"}}variant={themeContext.mode} className="toggleBtn" onClick={themeContext.toggleMode} >{themeContext.mode}</Button>{' '}

        </>
    )
}

export default Content;
