function removeStyleCharacters(string) { return string.replace(/(&amp;.|&[0-9kmnola-z])/g, "").replace(/"/g, "") }

function clean(string) { return string.replaceAll(/"|]/g, "").replaceAll("[", "").replaceAll("_", " ").replaceAll(/,/g, "\n\n") }

module.exports = {
    removeStyleCharacters,
    clean
}