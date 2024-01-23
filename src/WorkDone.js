
export default function Examplesofwork() {
    return (
        <>
            <h1>Examples of Work</h1>
            <Example1 />
            <br /><br /><br /><br /><br />
            <Example2 />
        </>
    );
}

function Example1() {
    return (
        <>
            <section>
                <h2>Example 1</h2>

                <img id="Example" src="/155 Website.png" alt="Picture of Website" height="25%" width="25%" />
                <div id="Example1Text">
                    <p>This is a website that I created in CIS 155. It showcases my skill with HTML and CSS.</p>
                    <p><a href="https://github.com/BenBrownstein/CIS155-Website/tree/main">GitHub Repository</a></p>
                    <p><a href="https://benbrownstein.github.io/CIS155-Website/">GitPages</a></p>
                </div>
            </section>
        </>
    );
}





function Example2() {
    return (
        <>
            <Example2Title />
            <iframe src={"rps.js"} style={{ border: "none" }} height="300px" width="300px"></iframe>
            <p id="Example2Text"> This is a mostly ChatGPT generated game to add another example and use Javascript.</p>
        </>
    );
}

function Example2Title() {
    return (
        <h2>Example 2</h2>
    );
}

