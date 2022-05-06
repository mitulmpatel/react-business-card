import React from 'react';
import ProfilePic from "../assets/images/profile-photo.png"

export default function ProfilePhoto() {
    return (
        <div>
            <img src={ProfilePic} className="profilephoto--image" alt='Me' />
        </div>
    );
}