import React from 'react'
import Card from './components/Card'

const App = () => {
    return (
        <div className="parent">
            <Card user='starboy' age={25} img='https://images.unsplash.com/photo-1745131068087-56f5ec5fa498?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <Card user='thunder' age={22} img='https://plus.unsplash.com/premium_photo-1773908602981-0788f7a7f9da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <Card user='lucifer' age={20} img='https://plus.unsplash.com/premium_photo-1747851401078-07973a2e95ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        </div>
    )
}

export default App