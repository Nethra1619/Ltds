function showMethods(dataType) {
    document.getElementById('methods').classList.remove('hidden');
    document.getElementById('dataType').innerText = dataType.charAt(0).toUpperCase() + dataType.slice(1);
    document.getElementById('examples').classList.add('hidden');
}

function showExamples(type) {
    const exampleContent = document.getElementById('exampleContent');
    exampleContent.innerHTML = '';
    
    if (type === 'methods') {
        if (document.getElementById('dataType').innerText === 'List') {
            exampleContent.innerHTML = `
                <h4>List Methods</h4>
                <p>append(), extend(), pop(), remove(), etc.</p>
                <div class="exampleAnimation">Animating list.append()...</div>
            `;
            animateExample('list');
        }
        // Add cases for Tuple, Dictionary, Set methods
    } else if (type === 'operations') {
        if (document.getElementById('dataType').innerText === 'List') {
            exampleContent.innerHTML = `
                <h4>List Operations</h4>
                <p>Concatenation, Slicing, etc.</p>
                <div class="exampleAnimation">Animating list slicing...</div>
            `;
            animateExample('list');
        }
        // Add cases for Tuple, Dictionary, Set operations
    }

    document.getElementById('examples').classList.remove('hidden');
}

function animateExample(dataType) {
    const animationDiv = document.querySelector('.exampleAnimation');
    if (dataType === 'list') {
        animationDiv.innerText = 'Appending 5 to list...';
        setTimeout(() => {
            animationDiv.innerText = '[1, 2, 3, 4, 5]';
        }, 2000);
    }
    // More animations for Tuple, Dictionary, Set
}
