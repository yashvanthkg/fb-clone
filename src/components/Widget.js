import React from 'react'
import './Widget.css'
function Widget() {
    return (
        <div className="widgets">
            <iframe
            src="https://www.facebook.com/plugins/page.php?
            href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&
            tabs=timeline&width=340&height=1500&small_header=false&
            adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="100%"
            style={{ border: "none", overflow: "hiiden" }}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            title="Clever programmer"
            >

            </iframe>
        </div>
    )
}

export default Widget
