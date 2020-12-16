import React from 'react'
import './StoryReel.css'
import Story from './Story'
import profilePic from '../images/IMG_20171231_180944.jpg'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://img.freepik.com/free-photo/man-jumping-impossible-possible-cliff-sunset-background-business-concept-idea_1323-266.jpg?size=626&ext=jpg"
                title="yashvnath"
                profileSrc={profilePic}
            />
            <Story
                image="https://i.pinimg.com/736x/33/f0/de/33f0de21efdfc2b5ded6a253f4f5b01d.jpg"
                title="yashvnath"
                profileSrc={profilePic}
            />
            <Story
                image="https://i.pinimg.com/474x/81/09/a6/8109a6ec49338acadb30728b7152779d.jpg"
                title="yashvnath"
                profileSrc={profilePic}
            />
            <Story
                image="https://i.pinimg.com/736x/77/f0/4a/77f04a1382d50450d6a756a7300bf237.jpg"
                title="yashvnath"
                profileSrc={profilePic}
            />
        </div>
    )
}

export default StoryReel
