
export default function Bar() {
    return (
        <>
            <Banner />
            <header>
                <nav id="nav_menu">
                    <ul>
                        <IndexLink />
                        <BenLink />
                        <RandallLink />
                        <JessicaLink />
                        <BrianLink />
                    </ul>
                </nav>
            </header>
        </>
    );
}

function Banner() {
    return (
        <>
            <center>
                <div>
                    <img src="ByteBanditsBanner.gif" alt="Byte Bandits Banner" width="531px" />
                </div>
            </center>
        </>
    );
}

function IndexLink() {
    return (
        <>
            <li>
                <a href="../index.html" class="transition-link"
                    data-transition="../brian-portfolio/images/Fast_transition.gif" style={{ color: "white" }} >Home</a>
            </li>
        </>
    );
}

function BenLink() {
    return (
        <>
            <li>
                <a href="../ben-portfolio/ben-index.html" class="transition-link"
                    data-transition="../brian-portfolio/images/Fast_transition.gif" style={{ color: "white" }}>Ben</a>
            </li>
        </>
    );
}

function RandallLink() {
    return (
        <>
            <li>
                <a href="../randall-portfolio/randall-index.html" class="transition-link"
                    data-transition="../brian-portfolio/images/Fast_transition.gif"
                    style={{ color: "white" }}>Randall</a>
            </li>
        </>
    );
}


function JessicaLink() {
    return (
        <>
            <li>
                <a href="../jessica-portfolio/jessica-index.html" class="transition-link"
                    data-transition="../brian-portfolio/images/Fast_transition.gif"
                    style={{ color: "white" }}>Jessica</a>
            </li>
        </>
    );
}

function BrianLink() {
    return (
        <>
            <li>
                <a href="../brian-portfolio/brian-index.html" class="transition-link"
                    data-transition="../brian-portfolio/images/Fast_transition.gif" style={{ color: "white" }}>Brian</a>
            </li>
        </>
    );
}
