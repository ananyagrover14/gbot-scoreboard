let sortDirection = false;
var info = [];

fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(data => {
      info = data
      loadTableData(info)
      console.log(data)
  });


window.onload = () => {
    loadTableData(info);
}


function loadTableData(info) {
    const tableBody = document.getElementById('tabledata');
    let dataHtml = '';

    for(let user of info) {
        dataHtml += `<tr><td>${user.name}</td><td>${user.id}</td></tr>`;
    }

    tableBody.innerHTML = dataHtml;
}

function sortColumn(columnName) {
    
    const dataType = typeof info[0][columnName];
    
    sortDirection = !sortDirection;

    switch(dataType) {
        case 'number':
        sortNumberColumn(sortDirection, columnName);
        break;
    }

    loadTableData(info);
}

function sortNumberColumn(sort, columnName) {
    info = info.sort((p1, p2) => {
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName] 
    });
}