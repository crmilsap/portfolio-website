import React from 'react'
import campusVid from './../Assets/campus.mp4'
export default function BackgroundVideo() {

    return (
      <video  loop autoPlay muted className = 'background-video'>
        <source src= { campusVid } type="video/mp4" />Your browser does not support the video tag.
      </video>
    );
}