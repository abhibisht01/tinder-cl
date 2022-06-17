import React from 'react'
import '../css/header.css'

import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton'
import { Link, useNavigate } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Header({ backButton }) {
    const navigate = useNavigate();


    return (
        <div className="header">

            {backButton ?

                (
                    <IconButton onClick={() => navigate(backButton)}> <ArrowBackIosIcon fontSize='large' className='header__icon' /> </IconButton>)
                : (
                    <IconButton>
                        <PersonIcon fontSize="large" className="header__icon" />
                    </IconButton>
                )

            }

            <Link to="/">
                <img
                    className="header__logo"
                    src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
                    alt="tinder logo"
                />
            </Link>
            <Link to='/chats'>
                <IconButton>
                    <ForumIcon fontSize="large" className="header__icon" />
                </IconButton>
            </Link>
        </div >
    );
}
export default Header
