/*eslint-disable*/

import React, { useContext } from 'react';
import './ToggleBackground.scss'
import { Button } from 'react-bootstrap';

import { ThemeContext } from '../../views/context/TheamContainer.js';

function Content(props) {
    const themeContext = useContext(ThemeContext);

    return (
        <> <p align="right">

                <Button style={{borderColor: "none" , marginRight: "17px"}} variant={themeContext.mode} className="toggleBtn" onClick={themeContext.toggleMode} >{themeContext.mode} </Button>{' '}
        </p>

        </>
    )
}

export default Content;
