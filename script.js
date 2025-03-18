//your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 
    'Anywhere But Here', 'An Old Dog'
];

// Function to remove 'A', 'An', 'The' from the start of a string
function stripPrefix(bandName) {
    return bandName.replace(/^(A |An |The )/i, '').trim();
}

// Sort the bands while ignoring prefixes
const sortedBands = bands.sort((a, b) => stripPrefix(a).localeCompare(stripPrefix(b)));

// Display sorted list
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
