// Data for different methods and operations for each structure
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
const listElement = document.getElementById('list');
const resultElement = document.getElementById('result');

// Store selected data structure
const dataType = localStorage.getItem('dataType');
const option = localStorage.getItem('option');

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

    // Reset content
    listElement.innerHTML = '[1, 2, 3, 4]';
    resultElement.innerHTML = '';

    let exampleList = [1, 2, 3, 4];

    // Perform actions based on selected method/operation
    switch (method) {
        case 'append':
            exampleList.push(5);
            setTimeout(() => resultElement.innerHTML = `Appended 5: [${exampleList.join(', ')}]`, 1000);
            break;
        case 'extend':
            exampleList.push(5, 6);
            setTimeout(() => resultElement.innerHTML = `Extended by [5, 6]: [${exampleList.join(', ')}]`, 1000);
            break;
        case 'pop':
            exampleList.pop();
            setTimeout(() => resultElement.innerHTML = `Popped last element: [${exampleList.join(', ')}]`, 1000);
            break;
        case 'remove':
            exampleList = exampleList.filter(num => num !== 3);
            setTimeout(() => resultElement.innerHTML = `Removed 3: [${exampleList.join(', ')}]`, 1000);
            break;
        case 'sort':
            exampleList = [4, 2, 3, 1];
            exampleList.sort();
            setTimeout(() => resultElement.innerHTML = `Sorted list: [${exampleList.join(', ')}]`, 1000);
            break;
        case 'slicing':
            const slicedList = exampleList.slice(0, 3);
            setTimeout(() => resultElement.innerHTML = `Sliced (first 3): [${slicedList.join(', ')}]`, 1000);
            break;
        case 'concatenation':
            exampleList = exampleList.concat([5, 6]);
            setTimeout(() => resultElement.innerHTML = `Concatenated: [${exampleList.join(', ')}]`, 1000);
            break;
        case 'repetition':
            exampleList = [1, 2, 3].concat([1, 2, 3]);
            setTimeout(() => resultElement.innerHTML = `Repetition: [${exampleList.join(', ')}]`, 1000);
            break;
        // Add cases for other data structures as necessary
    }

    resultElement.classList.add('fadeIn');
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
