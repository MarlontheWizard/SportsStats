function build_table_head(obj) {
    let headers = obj.headers; // -> []
    let tr = document.createElement("tr");
    for (let i = 0; i < headers.length; i++) {
        let th = document.createElement("th");
        th.textContent = headers[i];
        tr.appendChild(th);
    }
    let thead = document.createElement("thead");
    thead.appendChild(tr);
    return thead;
}

function build_table_body(obj) {
    let rowSet = obj.rowSet; // -> [ [], ... ]
    let tbody = document.createElement("tbody");
    for (let i = 0; i < rowSet.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < rowSet[i].length; j++) {
            let td = document.createElement("td");
            td.textContent = rowSet[i][j];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    return tbody;
}

function build_table(obj) {
    let _headers = obj.headers;
    let _rowSet = obj.rowSet;
    let thead = build_table_head({
        headers: _headers
    });
    let tbody = build_table_body({
        rowSet: _rowSet
    });
    let table = document.createElement("table");
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}

function APL_URL() {
    return "http://localhost:8080";
}

// api call
async function get_playerdashboardbyyearoveryearcombined(obj) {
    const url = APL_URL() + "/api/nba/get"
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const request = new Request(url, {
        method: "POST",
        body: JSON.stringify([]),
        headers: myHeaders
    });
    let res = await fetch(request);
    let res2 = await res.json();
    let r = JSON.parse(res2);
    return r;
}

function app(obj) {
    get_playerdashboardbyyearoveryearcombined({})
        .then(function (r) {
            let parameters = r.parameters; // -> {}
            let resource = r.resource;
            let resultSets = r.resultSets; // -> []
            let root = document.getElementById("root");
            for (let i = 0; i < resultSets.length; i++) {
                let table = build_table({ 
                    headers: resultSets[i].headers,
                    rowSet: resultSets[i].rowSet 
                });
                root.appendChild(table);
            }
        });
}

app({});