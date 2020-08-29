//input the values

function multiplicationTable() {
    let multiplier = document.getElementById('value1').value;
    let range = document.getElementById('value2').value; 
//apply the multiplication table using a 'for' statement

    let displayTable = '';
    for(let i=1; i<=range; i++) {

        displayTable += multiplier + 'x' + i + ' = ' + multiplier*i + '<br>';


    }
    const table = document.getElementById('mytable').innerHTML = displayTable;
}