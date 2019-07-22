var id = 0;
var page_list_id = ["first-page", "second-page", "third-page"];
var current_page_id = "first-page";

var input_chain_list = [];

var blockchain_host;
var nodeList = [];


var display_page = function(pageId) {
    if(current_page_id === "first-page" && checkBlockchainHost()){

        blockchain_host= document.getElementById("blockchain_host").value;
        setBlockchainHost(blockchain_host);

        showpage(pageId);
    }else if (current_page_id === "second-page") {
        getNodeIds();
        if (checkNodeIds()) {
            tableLatestBlock(getLatestBlock());
            tableLatestTransaction(getLatestTransaction(nodeList));
            showpage(pageId);
        }


    }
};

var showpage = function(pageId) {
    var display_element = document.getElementById(current_page_id);
    display_element.style.display= "none";

    current_page_id = pageId;
    var element = document.getElementById(current_page_id);
    element.classList.remove("invisible");
};

var newinput = function() {

    var parent = document.getElementById("chain-input-list");
    var field = document.createElement("input");
    field.type = "text";
    field.className = "form-control mb-3";
    field.placeholder = "Enter a valid Node ID";
    field.style = "display:block";
    field.id = "input" + id;
    input_chain_list[id]=field;
    parent.appendChild(input_chain_list[id]);
    id += 1;
    if (id===2){
        document.getElementById("plus").style.visibility= "hidden";
    }
};

var deleteinput = function() {
    id -=1;
    if (id===1){
        document.getElementById("plus").style.visibility= "visible";
    }
    var parent = document.getElementById("chain-input-list");
    parent.removeChild(input_chain_list[id]);
    input_chain_list.pop();
};

var checkBlockchainHost = function () {

    return true;
};

var checkNodeIds = function () {

    return true;
};

var getNodeIds = function() {
    for (var index = 0; index < input_chain_list.length; index++) {
        nodeList[index] = document.getElementById("input"+index).value;
    }
};

function tableLatestTransaction(latestTransactionArray){



    var perrow = 3, // 3 items per row
        html = " <table id=\"transaction_table\" class=\"table table-bordered\">\n" +
            "                <thead>\n" +
            "                  <tr>\n" +
            "                    <th scope=\"col\">#</th>\n" +
            "                    <th scope=\"col\">Transaction hash</th>\n" +
            "                    <th scope=\"col\">From</th>\n" +
            "                    <th scope=\"col\">To</th>\n" +
            "                  </tr>\n" +
            "                </thead>\n" +
            "                <tbody>\n"+
            "                  <tr>";

    // Loop through array and add table cells
    for (var l= 0; l<latestTransactionArray.length;l++){
        for (var i=0; i<latestTransactionArray[l][i].length; i++) {
            html += "<th>"+(i+1)+ "</th>";
            for (var j=0; j<latestTransactionArray[l][i].length;j++){
                html +=  "<td>" + latestTransactionArray[l][i][j] + "</td>";
                // Break into next row
                var next = j+1;
                if (next%perrow==0 && next!=latestTransactionArray[l][i].length) {
                    html += "</tr><tr>";
                }
            }
            html += "</tr></tbody>\n" +
                "              </table>";

        }

    }


    // ATTACH HTML TO CONTAINER
    document.getElementById("transaction_table").innerHTML = html;

}

function tableLatestBlock(latestBlockArray){



    var perrow = 3, // 3 items per row
        html = " <table id=\"block_table\" class=\"table table-bordered\">\n" +
            "                <thead>\n" +
            "                  <tr>\n" +
            "                    <th scope=\"col\">#</th>\n" +
            "                    <th scope=\"col\">Block Number</th>\n" +
            "                    <th scope=\"col\">Miner</th>\n" +
            "                    <th scope=\"col\">Timestamp</th>\n" +
            "                  </tr>\n" +
            "                </thead>\n" +
            "                <tbody>\n"+
            "                  <tr>";

    // Loop through array and add table cells
    for (var l= 0; l<latestBlockArray.length;l++){

        html += "<th>"+(l+1)+ "</th>";
        for (var i=0; i<latestBlockArray[l].length; i++) {


            html +=  "<td>" + latestBlockArray[l][i] + "</td>";
            // Break into next row
            var next = i+1;
            if (next%perrow==0 && next!=latestBlockArray[l].length) {
                html += "</tr><tr>";
            }



        }
        html += "</tr></tbody>\n" +
            "              </table>";

    }


    // ATTACH HTML TO CONTAINER
    document.getElementById("block_table").innerHTML = html;

}




// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}
