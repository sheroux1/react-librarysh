import React from 'react'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)`,
        width: '100%',
        height: '90%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    button_text: {
        color: 'white',
        textDecoration: 'none',
    },
});
export const Styles = () => {
  return {useStyles}
}
