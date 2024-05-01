// //Only addition 
// // function add(){
// //     let input1 = document.getElementById('id-1').value;
// //     let input2 = document.getElementById('id-2').value;

// //     function sum(){
// //         if(!isNaN(input1) && !isNaN(input2)){
// //            return parseInt(input1) + parseInt(input2);
// //         }
// //         else{
// //            return input1 + ' ' + input2;
// //         }
// //     }
// //     document.getElementById('id-3').value = sum();
// // }

var GlobleTr = '';
function calculation() {
    let val1 = document.getElementById('label-1').value;
    let val2 = document.getElementById('label-2').value;
    let operation = document.getElementById('dropdown').value;
    let result;
    switch (operation) {
        case 'add':
            result = parseInt(val1) + parseInt(val2);
            break;
        case 'sub':
            result = parseInt(val1) - parseInt(val2);
            break;
        case 'mul':
            result = parseInt(val1) * parseInt(val2);
            break;
        case 'div':
            result = parseInt(val1) / parseInt(val2);
            break;
        default:
            result = 'Invalid operation';
    }
    document.getElementById('id-3').value = result;
    document.getElementById('label-1').value = "";
    document.getElementById('label-2').value = "";
    document.getElementById('id-3').value = '';
    if (GlobleTr == '') {
        let newRow =
            `<tr>
        <td>${val1}</td>
        <td>${val2}</td>
        <td>${operation}</td>
        <td>${result}</td>
        <td><button onclick = 'editRow(this)'>Edit</td>
        <td><button onclick = 'delRow(this)'>Delete</td>
        </tr>`
        document.getElementById('tbody').innerHTML += newRow;
    }
    else {
        GlobleTr.childNodes[1].textContent = val1;
        GlobleTr.childNodes[3].textContent = val2;
        GlobleTr.childNodes[5].textContent = operation;
        GlobleTr.childNodes[7].textContent = result;
        GlobleTr = '';
    }
}
function editRow(button) {
    GlobleTr = button.parentNode.parentNode;
    document.getElementById('label-1').value = GlobleTr.childNodes[1].innerHTML;
    document.getElementById('label-2').value = GlobleTr.childNodes[3].innerHTML;
}
function delRow(button) {
    let row = button.parentNode.parentNode;
    if (confirm('Are you sure to delete this data')) {
        row.remove();
    }
}

// //Anther approach
// // let table = document.getElementById('calculationTable');
// // let row = table.insertRow(-1);
// // row.insertCell(0).textContent = val1;
// // row.insertCell(1).textContent = val2;
// // row.insertCell(2).textContent = oper;
// // row.insertCell(3).textContent = res;