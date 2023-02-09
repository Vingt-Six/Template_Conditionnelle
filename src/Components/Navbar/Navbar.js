import './Navbar.css'

function Navbar() {
    return (
        <div className='nav'>
            <h1 className='title'>The<span>Cocktail</span>DB</h1>
            <div className='menu'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar