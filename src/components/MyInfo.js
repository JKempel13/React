import React from "react"


function MyInfo() {
    const firstName = "Jason"
    const lastName = "Kempel"
    return (
        <div>
            <h1>Hello {firstName + " " + lastName}!</h1>
            <p>I'm new to React, and I'm excited to learn more!</p>
            <ul>
                <li>Italy</li>
                <li>Greece</li>
                <li>Iceland</li>
            </ul>
            <input type="checkbox" />
            <span>Item 1</span>
            <br/>
            <input type="checkbox" />
            <span>Item 2</span>
            <br/>
            <input type="checkbox" />
            <span>Item 3</span>
            <br/>
            <input type="checkbox" />
            <span>Item 4</span>
        </div>
    )
}

export default MyInfo