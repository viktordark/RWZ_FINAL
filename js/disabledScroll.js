window.disabledScroll = function () {
    const widthScroll = window.innerWidth - document.body.offsetWidth

    document.body.style.cssText = `
        position: relative;
        height: 100vh;
        top: 0;
        left: 0;
        padding-right: ${widthScroll}px;
        overflow: hidden;
    `;
}

window.enabledScroll = function () {
    document.body.style = "";
}