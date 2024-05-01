const main_array = [];

function makeTable() {
    const form = document.getElementById('main-form');
    const cid = form.querySelector('input[name="c-id"]').value;
    const fname = form.querySelector('input[name="fname"]').value;
    const lname = form.querySelector('input[name="lname"]').value;

    if (cid && fname && lname) {
        main_array.push({ cid, fname, lname });
        updateTable();
        form.reset();
    }
}
debugger;
function updateTable() {
    const tableBody = document.getElementById('table-main');
    tableBody.innerHTML = "";

    main_array.forEach((ele) => {
        tableBody.innerHTML +=
            `<tr>
        <td>${ele.cid}</td>
        <td>${ele.fname}</td>
        <td>${ele.lname}</td>
    </tr>`;
    });
}
function addInput() {
    debugger;
    document.getElementById('main-form').innerHTML += `
            <div class="container">
            <td> <input type="text" name="c-id"  placeholder="Client ID"></td>  
            <td> <input type="text" name="fname"  placeholder="First Name"></td>  
            <td> <input type="text" name="lname"  placeholder="Last Name"></td>
            <td> <button type='button' id="add" onclick="addInput()">+</button></td>
            </div> <br> <br>`
}