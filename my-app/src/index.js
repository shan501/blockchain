import React from 'react'
import ReactDom from 'react-dom'

function Greetings(){
    return <h4>
        HELLO WORLD!
    </h4>
}

ReactDom.render(<Greetings/>,document.getElementById('root'))