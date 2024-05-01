var productElement = document.getElementById('product-dropdown');
var quantityElement = document.getElementById('quantity');
var priceElement = document.getElementById('price');
var totalElement = document.getElementById('total');
var clickElement = document.getElementById('click');
var row = '';

clickElement.addEventListener('click', displayTable);

quantityElement.addEventListener('input', updateTotal);
productElement.addEventListener('input', updatePrice);
priceElement.addEventListener('input', updateTotal);

let productPrice = {
    '1': 10,
    '2': 20,
    '3': 30,
    '4': 40,
    '5': 50
}
function updatePrice() {
    var selectedProduct = productElement.value;
    priceElement.value = productPrice[selectedProduct];
    updateTotal();
}
function populateProductDropdown() {
    let products = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'];
    for (let i = 0; i < products.length; i++) {
        let option = document.createElement('option');
        option.value = i + 1;
        option.text = products[i];
        productElement.appendChild(option);
    }
}
populateProductDropdown();
function updateTotal() {
    const quantity = parseFloat(quantityElement.value) || 0;
    const price = parseFloat(priceElement.value) || 0;
    const total = quantity * price;

    totalElement.value = total.toFixed(2);
}

function displayTable() {
    document.getElementById('main-form').addEventListener('submit',(e)=>{
         e.preventDefault();
    })
    var product = productElement.options[productElement.selectedIndex].text;
    var quantity = parseFloat(quantityElement.value) || 0;
    var price = parseFloat(priceElement.value) || 0;
    var total = parseFloat(totalElement.value) || 0;

    if (row === '') {
        if (product !== 'Select product' && quantity > 0 && price > 0) {
            let mainTable = document.getElementById('main-table');
            mainTable.classList.remove('hidden');
            let newRow = document.createElement('tr');
            newRow.innerHTML =
                `   <td>${product}</td>
                    <td>${quantity}</td>
                    <td>${price.toFixed(2)}</td>
                    <td>${total.toFixed(2)}</td>
                    <td><button onclick="editTableRow(this)">Edit</button></td>
                    <td><button onclick="deleteTableRow(this)">Delete</button></td>
                    `;
            mainTable.querySelector('tbody').appendChild(newRow);

            productElement.value = '1';
            quantityElement.value = '';
            priceElement.value = '';
            totalElement.value = '';
        }
    } else {
        let mainTable = document.getElementById('main-table');
        mainTable.classList.remove('hidden');
        row.childNodes[1].textContent = product;
        row.childNodes[3].textContent = quantity;
        row.childNodes[5].textContent = price.toFixed(2);
        row.childNodes[7].textContent = total.toFixed(2);
        row = '';
    }
    
}
debugger;

function editTableRow(button) {
    row = button.parentNode.parentNode;
    console.log(row);

    document.getElementById('product-dropdown').value = row.childNodes[1].innerHTML;
    document.getElementById('quantity').value = row.childNodes[3].innerHTML;
    document.getElementById('price').value = row.childNodes[5].innerHTML;
}
function deleteTableRow(row) {
    let confirmation = confirm("Are you sure you want to delete this row?");

    if (confirmation) {
        let table = document.getElementById("main-table").getElementsByTagName('tbody')[0];
        table.removeChild(row.parentElement.parentElement);
    }
}
