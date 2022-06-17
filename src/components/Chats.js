import React from 'react'
import '../css/chats.css'
import Chat from './Chat'

function Chats() {
    return (
        <div className='chats'>
            <Chat
                name="Amber"
                message="My dog stepped on the Bee :)"
                timestamp='40 sec ago'
                profilePic='https://w0.peakpx.com/wallpaper/513/985/HD-wallpaper-amber-heard-amber.jpg' />
            <Chat
                name="Andrew"
                message="Hihihih heeee"
                timestamp='1 min ago'
                profilePic='https://wallpaperaccess.com/full/2188969.jpg' />
            <Chat
                name="Elizabeth"
                message="You took everything from me "
                timestamp='5 min ago'
                profilePic='https://c4.wallpaperflare.com/wallpaper/873/618/413/elizabeth-olsen-actress-celebrity-women-hd-wallpaper-preview.jpg' />
            <Chat
                name="Ronaldo"
                message="Suiiiiiiii"
                timestamp='2 hours ago'
                profilePic='https://www.cristianoronaldo.com/assets/images/brand_eyewear.jpg?832236' />




        </div>
    )
}

export default Chats