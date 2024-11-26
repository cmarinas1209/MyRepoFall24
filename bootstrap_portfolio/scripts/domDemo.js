console.log(document);

function testTheDom() {
  // Add your test code here
  console.log('Testing the DOM...');
//add

var nodes = document.getElementsByTagName("li");
console.log(nodes);

for (let node of nodes){
    console.log(node.textContent)
}

var checkingNode = document.getElementById("checking");
//checkingNode.textContent = "Changed!";
balance = parseInt(checkingNode.textContent);
balance += 100;
checkingNode.textContent = balance;

} 

function depositChecking() {
    /*get value of html element with id checking*/
    var td = document.getElementById('checking');
    /*convert string to integer*/
    checking = parseInt(td.textContent,10);
    checking += 100;
    td.textContent=checking;
}

function depositSavings() {
    /*get value of html element with id savings*/
    var td = document.getElementById('savings');
    var savings = td.textContent;
    /*convert string to integer*/
    savings = parseInt(savings,10);
    /* if savings is 0, we need to change the title from Alert back to Bank Account */
    if(savings == 0) {
        var title = document.getElementById('bankAccountTitle');
        title.textContent="Bank Account";
    }
    savings += 100;
    td.textContent=savings;
}

function emptySavings() {
    /*get value of html element with id savings*/
    var td = document.getElementById("savings");
    td.textContent = 0;
    var title = document.getElementById('bankAccountTitle');
    /*change value of title */
    title.textContent="ALERT: Savings Empty";
}
