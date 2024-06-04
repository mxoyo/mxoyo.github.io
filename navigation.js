function generateNavigationBar() {
    document.write(`
	<div class="headerBackground">
                <div class="headerTitle">
                    <h1>Hi, I'm Matthias
                        <p>Character Animator, Tech Artist</p>
                    </h1>
                </div>
                <div class="headerGif">
                    <img src="images/gorbHeader_1.gif" alt="GIF of Dance Character"
                        style="display:block; margin: auto; max-height: 100%;">
                </div>
            </div>
            <div class="navigationList" id="navigationList">
                <div id="nameButton">
                    <a href="#home"><button class="navButton" style="width: 300px;">Matthias Riemensperger
                        </button></a>
                </div>
                <div class="navButtonHolder"><a href="#titles" onclick="scrollToSection('titles'); return false;">
                        <button class="navButton">Portfolio</button></a></div>
                <div class="navButtonHolder"><a href="#portfolio" onclick="scrollToSection('portfolio'); return false;">
                        <button class="navButton">Worksamples</button></a></div>
                <div class="navButtonHolder"><a href="#about" onclick="scrollToSection('about'); return false;">
                        <button class="navButton">About</button></a></div>
            </div>
    <br>
    `);
}