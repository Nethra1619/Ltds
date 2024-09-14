// Define the methods and operations for each data structure
const methodsOperations = {
    list: {
        methods: ['append', 'extend', 'pop', 'remove', 'sort'],
        operations: ['slicing', 'concatenation', 'repetition']
    },
    tuple: {
        operations: ['indexing', 'slicing', 'concatenation']
    },
    dictionary: {
        methods: ['get', 'update', 'pop', 'items', 'keys'],
        operations: ['accessing keys', 'checking membership', 'adding elements']
    },
    set: {
        methods: ['add', 'remove', 'union', 'intersection', 'difference'],
        operations: ['membership testing', 'set operations']
    }
};

// Select elements from the page
const exampleTitle = document.getElementById('exampleTitle');
const methodDropdown = document.getElementById('methodDropdown');
const animateBtn = document.getElementById('animateBtn');
const dataInput = document.getElementById('dataInput');
const listElement = document.getElementById('list');
const resultElement = document.getElementById('result');

// Store selected data structure
const dataType = localStorage.getItem('dataType') || 'list'; // Default to 'list'
const option = localStorage.getItem('option') || 'methods'; // Default to 'methods'

// Populate dropdown with methods/operations
function populateDropdown() {
    methodDropdown.innerHTML = '';
    const choices = methodsOperations[dataType][option];
    choices.forEach(choice => {
        const optionElement = document.createElement('option');
        optionElement.value = choice;
        optionElement.innerText = choice.charAt(0).toUpperCase() + choice.slice(1);
        methodDropdown.appendChild(optionElement);
    });
}

// Handle example animations based on selection
function animateExample(method) {
    resultElement.classList.remove('fadeIn');
    resultElement.style.opacity = 0; // Ensure opacity is reset

    // Get user input and process it
    let input = dataInput.value.trim();
    let exampleList = input.split(',').map(item => Number(item.trim())).filter(item => !isNaN(item));

    // Reset content
    listElement.innerHTML = `[${exampleList.join(', ')}]`;
    resultElement.innerHTML = '';

    // Perform actions based on selected method/operation
    switch (method) {
        case 'append':
            exampleList.push(5);
            listElement.innerHTML = `[${exampleList.join(', ')}]`;
            setTimeout(() => resultElement.innerHTML = `Appended 5: [${exampleList.join(', ')}]`, 500);
            break;
        case 'extend':
            exampleList.push(5, 6);
            listElement.innerHTML = `[${exampleList.join(', ')}]`;
            setTimeout(() => resultElement.innerHTML = `Extended by [5, 6]: [${exampleList.join(', ')}]`, 500);
            break;
        case 'pop':
            exampleList.pop();
            listElement.innerHTML = `[${exampleList.join(', ')}]`;
            setTimeout(() => resultElement.innerHTML = `Popped last element: [${exampleList.join(', ')}]`, 500);
            break;
        case 'remove':
            exampleList = exampleList.filter(num => num !== 3);
            listElement.innerHTML = `[${exampleList.join(', ')}]`;
            setTimeout(() => resultElement.innerHTML = `Removed 3: [${exampleList.join(', ')}]`, 500);
            break;
        case 'sort':
            exampleList.sort((a, b) => a - b);
            listElement.innerHTML = `[${exampleList.join(', ')}]`;
            setTimeout(() => resultElement.innerHTML = `Sorted list: [${exampleList.join(', ')}]`, 500);
            break;
        case 'slicing':
            const slicedList = exampleList.slice(0, 3);
            listElement.innerHTML = `[${slicedList.join(', ')}]`;
            setTimeout(() => resultElement.innerHTML = `Sliced (first 3): [${slicedList.join(', ')}]`, 500);
            break;
        case 'concatenation':
            exampleList = exampleList.concat([5, 6]);
            listElement.innerHTML = `[${exampleList.join(', ')}]`;
            setTimeout(() => resultElement.innerHTML = `Concatenated: [${exampleList.join(', ')}]`, 500);
            break;
        case 'repetition':
            exampleList = exampleList.concat(exampleList);
            listElement.innerHTML = `[${exampleList.join(', ')}]`;
            setTimeout(() => resultElement.innerHTML = `Repetition: [${exampleList.join(', ')}]`, 500);
            break;
        // Additional methods and operations for tuple, dictionary, and set
        default:
            resultElement.innerHTML = 'Selected method/operation not implemented.';
    }

    setTimeout(() => resultElement.style.opacity = 1, 500); // Fade in effect
}

// Set initial values based on data type and option
exampleTitle.innerText = `${dataType.charAt(0).toUpperCase() + dataType.slice(1)} - ${option.charAt(0).toUpperCase() + option.slice(1)} Examples`;

// Populate the dropdown with relevant methods/operations
populateDropdown();

// Handle button click to animate selected method/operation
animateBtn.addEventListener('click', () => {
    const selectedMethod = methodDropdown.value;
    animateExample(selectedMethod);
});
