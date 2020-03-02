let common = (function () {
    //* Constants
    const MSG_AREA = document.querySelector("#messageArea");
    const MSG_TEXT = document.querySelector("#message");
    const JSON_AREA = document.querySelector("#jsonArea");
    const JSON_TEXT = document.querySelector("#json");

    //* Private functions
    function displayMessage(msg) {
        MSG_AREA.classList.remove('d-none');
        MSG_TEXT.textContent = msg;
        console.log(msg)
    }
    function displayJSON(data) {
        JSON_AREA.classList.remove('d-none');
        JSON_TEXT.textContent = JSON.stringify(data, undefined, 2);
    }
    function hideMessageArrea() {
        MSG_AREA.classList.add('d-none');
        MSG_TEXT.textContent = '';
        JSON_AREA.classList.add('d-none');
        JSON_TEXT.textContent = '';

    }
    //* Public Functions
    return {
        displayMessage: displayMessage,
        displayJSON: displayJSON,
        hideMessageArrea: hideMessageArrea
    }
})();