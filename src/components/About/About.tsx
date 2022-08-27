import React from 'react'
import { Navbar } from '../Navbar';
import { makeStyles } from '@material-ui/core';
import { Footer } from '../Footer';


const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)`,
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

interface Props {
    title: string;
}

export const About = ( props: Props ) => {
    const classes = useStyles();
    return (
    <>
        <Navbar />
        <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{ props.title }</h1>
        This is the About page</div>
        </div>
        <Footer />
    </>
  )
}
