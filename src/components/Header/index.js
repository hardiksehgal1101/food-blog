import React from 'react'
import "./styles.css"

function Header() {
    return (
        <header>
			<nav>
				<a href="/" className="logo">
					Logo
				</a>
				<div className="grow" />
				<ul className="navigation">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">About</a>
					</li>
					<li>
						<a href="/">Offers</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
					
				</ul>
			</nav>
		</header>
    )
}

export default Header
