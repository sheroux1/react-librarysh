import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    box: {
        padding: '20px 80px',
        background: 'black',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        color: 'white',
    },
    container: {
        display: 'flex',
        flexdirection: 'column',
        justifycontent: 'center',
        maxwidth: '1000px',
        margin: '0 auto',
    },
    column: {
        display: 'flex',
        flexdirection: 'column',
        textalign: 'left',
        marginleft: '60px',
    },
    row: {
        display: 'grid',
        gridtemplatecolumns: 'repeat(auto-fill, minmax(185px, 1fr))',
        gridgap: '20px',

    },
    heading: {
        fontsize: '24px',
        color: 'white',
        marginbottom: '20px',
        fontweight: 'bold',
    },

})


export const Footer = () => {
  const classes = useStyles();
    return (
    <>
    <div className={`${classes.box}`}>
        <h1>My Library: a Literary Rainbow</h1>
        <div className={`${classes.container}`}>
            <div className={`${classes.row}`}>
                <div className={`${classes.column}`}>
                    <div className={`${classes.heading}`}>
                            <Link to='About'>About Us</Link>
                    </div>
                </div>
                <div className={`${classes.column}`}>
                    <div className={`${classes.heading}`}>Check out my <a href="https://carcollectionsheroux.herokuapp.com/">Car Collection</a></div>
                </div>
                <div className={`${classes.column}`}>
                    <div className={`${classes.heading}`}>
                        <Link to ='Contact'>Contact Us</Link>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
