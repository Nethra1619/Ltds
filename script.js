// Store the selected data type globally
let selectedDataType = '';

function goToMethodsOperations(dataType) {
    // Store the selected data type in local storage
    selectedDataType = dataType;
    localStorage.setItem('dataType', dataType);
    window.location.href = 'methods_operations.html';
}

function goToExamples(option) {
    const dataType = localStorage.getItem('dataType');
    localStorage.setItem('option', option);
    window.location.href = 'examples.html';
}

// For methods_operations.html - Set the selected data type on page load
if (window.location.pathname.includes('methods_operations.html')) {
    const dataType = localStorage.getItem('dataType');
    document.getElementById('dataType').innerText = `Selected: ${dataType.charAt(0).toUpperCase() + dataType.slice(1)}`;
}

// For examples.html - Show the appropriate example based on user choice
if (window.location.pathname.includes('examples.html')) {
    const dataType = localStorage.getItem('dataType');
    const option = localStorage.getItem('option');
    const exampleTitle = document.getElementById('exampleTitle');
    const exampleContent = document.getElementById('exampleContent');

    exampleTitle.innerText = `${dataType.charAt(0).toUpperCase() + dataType.slice(1)} - ${option.charAt(0).toUpperCase() + option.slice(1)} Example`;

    // Display examples based on the dataType and option selected
    if (dataType === 'list') {
        if (option === 'methods') {
            exampleContent.innerHTML = `
                <h4>List Methods</h4>
                <p>Example: list.append()</p>
                <p>Animating: list.append(5)</p>
                <div>[1, 2, 3, 4, 5]</div>
            `;
        } else {
            exampleContent.innerHTML = `
                <h4>List Operations</h4>
                <p>Example: list slicing</p>
                <p>Animating: list[:3]</p>
                <div>[1, 2, 3]</div>
            `;
        }
    }
    // Similarly, add examples for tuple, dictionary, and set
}
