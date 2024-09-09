let objArr = [];
let activeTables = [];
let theString = "";
let totalProfit = 0;
let totalCollection = 0;
let totalPlayers = 0;
let totalTables = 0;
let totalCapped = 0;
let totalDeadSpreads = 0;
const theText = document.getElementById("template");
let updateTime = "";

function table(name, start, current, opened, coll, play, cap, clsd){
    this.tableName = name;
    this.startingBalance = start;
    this.currentBalance = current;
    this.isOpen = opened;
    this.collection = coll;
    this.players = play;
    this.capped = cap;
    this.closed = clsd;
    this.profit = this.currentBalance - this.startingBalance;
    this.operator = '';
}

function setObj(){    
    tableEighty = new table("UTH80", document.getElementById("0").valueAsNumber,document.getElementById("balanceEighty").valueAsNumber,document.getElementById("eightyOpen").checked,document.getElementById("collection80").valueAsNumber,document.getElementById("playersOnEighty").valueAsNumber,document.getElementById("eightyCapped").checked,document.getElementById("eightyClsd").checked);
    tableEightyOne = new table("UTH81", document.getElementById("1").valueAsNumber,document.getElementById("balanceEightyOne").valueAsNumber,document.getElementById("eightyOneOpen").checked,document.getElementById("collection81").valueAsNumber,document.getElementById("playersOnEightyOne").valueAsNumber,document.getElementById("eightyOneCapped").checked,document.getElementById("eightyOneClsd").checked);
    tableEightyTwo = new table("FUPGP82", document.getElementById("2").valueAsNumber,document.getElementById("balanceEightyTwo").valueAsNumber,document.getElementById("eightyTwoOpen").checked,document.getElementById("collection82").valueAsNumber,document.getElementById("playersOnEightyTwo").valueAsNumber,document.getElementById("eightyTwoCapped").checked,document.getElementById("eightyTwoClsd").checked);
    tableEightyThree = new table("BJ83", document.getElementById("3").valueAsNumber,document.getElementById("balanceEightyThree").valueAsNumber,document.getElementById("eightyThreeOpen").checked,document.getElementById("collection83").valueAsNumber,document.getElementById("playersOnEightyThree").valueAsNumber,document.getElementById("eightyThreeCapped").checked,document.getElementById("eightyThreeClsd").checked);
    tableEightyFour = new table("BJ84", document.getElementById("4").valueAsNumber,document.getElementById("balanceEightyFour").valueAsNumber,document.getElementById("eightyFourOpen").checked,document.getElementById("collection84").valueAsNumber,document.getElementById("playersOnEightyFour").valueAsNumber,document.getElementById("eightyFourCapped").checked,document.getElementById("eightyFourClsd").checked);
    tableEightyFive = new table("BJ85", document.getElementById("5").valueAsNumber,document.getElementById("balanceEightyFive").valueAsNumber,document.getElementById("eightyFiveOpen").checked,document.getElementById("collection85").valueAsNumber,document.getElementById("playersOnEightyFive").valueAsNumber,document.getElementById("eightyFiveCapped").checked,document.getElementById("eightyFiveClsd").checked);
    tableEightySix = new table("BJ86", document.getElementById("6").valueAsNumber,document.getElementById("balanceEightySix").valueAsNumber,document.getElementById("eightySixOpen").checked,document.getElementById("collection86").valueAsNumber,document.getElementById("playersOnEightySix").valueAsNumber,document.getElementById("eightySixCapped").checked,document.getElementById("eightySixClsd").checked);
    tableEightySeven = new table("BJ87", document.getElementById("7").valueAsNumber,document.getElementById("balanceEightySeven").valueAsNumber,document.getElementById("eightySevenOpen").checked,document.getElementById("collection87").valueAsNumber,document.getElementById("playersOnEightySeven").valueAsNumber,document.getElementById("eightySevenCapped").checked,document.getElementById("eightySevenClsd").checked);
    tableEightyEight = new table("TCP88", document.getElementById("8").valueAsNumber,document.getElementById("balanceEightyEight").valueAsNumber,document.getElementById("eightyEightOpen").checked,document.getElementById("collection88").valueAsNumber,document.getElementById("playersOnEightyEight").valueAsNumber,document.getElementById("eightyEightCapped").checked,document.getElementById("eightyEightClsd").checked);
    tableEightyNine = new table("TCP89", document.getElementById("9").valueAsNumber,document.getElementById("balanceEightyNine").valueAsNumber,document.getElementById("eightyNineOpen").checked,document.getElementById("collection89").valueAsNumber,document.getElementById("playersOnEightyNine").valueAsNumber,document.getElementById("eightyNineCapped").checked,document.getElementById("eightyNineClsd").checked);
    tableNinety = new table("BAC90", document.getElementById("10").valueAsNumber,document.getElementById("balanceNinety").valueAsNumber,document.getElementById("ninetyOpen").checked,document.getElementById("collection90").valueAsNumber,document.getElementById("playersOnNinety").valueAsNumber,document.getElementById("ninetyCapped").checked,document.getElementById("ninetyClsd").checked);
    tableNinetyOne = new table("BAC91", document.getElementById("11").valueAsNumber,document.getElementById("balanceNinetyOne").valueAsNumber,document.getElementById("ninetyOneOpen").checked,document.getElementById("collection91").valueAsNumber,document.getElementById("playersOnNinetyOne").valueAsNumber,document.getElementById("ninetyOneCapped").checked,document.getElementById("ninetyOneClsd").checked);
    tableNinetyTwo = new table("BAC92", document.getElementById("12").valueAsNumber,document.getElementById("balanceNinetyTwo").valueAsNumber,document.getElementById("ninetyTwoOpen").checked,document.getElementById("collection92").valueAsNumber,document.getElementById("playersOnNinetyTwo").valueAsNumber,document.getElementById("ninetyTwoCapped").checked,document.getElementById("ninetyTwoClsd").checked);
    tableNinetyThree = new table("BAC93", document.getElementById("13").valueAsNumber,document.getElementById("balanceNinetyThree").valueAsNumber,document.getElementById("ninetyThreeOpen").checked,document.getElementById("collection93").valueAsNumber,document.getElementById("playersOnNinetyThree").valueAsNumber,document.getElementById("ninetyThreeCapped").checked,document.getElementById("ninetyThreeClsd").checked);
    tableNinetyFour = new table("BAC94", document.getElementById("14").valueAsNumber,document.getElementById("balanceNinetyFour").valueAsNumber,document.getElementById("ninetyFourOpen").checked,document.getElementById("collection94").valueAsNumber,document.getElementById("playersOnNinetyFour").valueAsNumber,document.getElementById("ninetyFourCapped").checked,document.getElementById("ninetyFourClsd").checked);
    tableNinetyFive = new table("BAC95", document.getElementById("15").valueAsNumber,document.getElementById("balanceNinetyFive").valueAsNumber,document.getElementById("ninetyFiveOpen").checked,document.getElementById("collection95").valueAsNumber,document.getElementById("playersOnNinetyFive").valueAsNumber,document.getElementById("ninetyFiveCapped").checked,document.getElementById("ninetyFiveClsd").checked);
    
    objArr.push(tableEighty);
    objArr.push(tableEightyOne);
    objArr.push(tableEightyTwo);
    objArr.push(tableEightyThree);
    objArr.push(tableEightyFour);
    objArr.push(tableEightyFive);
    objArr.push(tableEightySix);
    objArr.push(tableEightySeven);
    objArr.push(tableEightyEight);
    objArr.push(tableEightyNine);
    objArr.push(tableNinety);
    objArr.push(tableNinetyOne);
    objArr.push(tableNinetyTwo);
    objArr.push(tableNinetyThree);
    objArr.push(tableNinetyFour);
    objArr.push(tableNinetyFive);
}

function setActiveTables(){
    for(let i = 0; i < objArr.length; i++){
        if(objArr[i].isOpen === true){
            activeTables.push(objArr[i]);
        }
    }
}

function checkIfCapped(){
    for(let i = 0; i < activeTables.length; i++){
        if(activeTables[i].capped === true){
            activeTables[i].players = "CAP";
            totalCapped++;
        }
    }
}

function checkIfClosed(){
    for(let i = 0; i < activeTables.length; i++){
        if(activeTables[i].closed === true){
            activeTables[i].players = "CLSD";
        }
        else{
            totalTables++;
        }
    }
}

function addProfit(){
    let tempProfit = 0;
    for(let i = 0; i < activeTables.length; i++){
        tempProfit += activeTables[i].profit;
    }
    return tempProfit
}

function addCollection(){
    let tempCollection = 0;
    for(let i = 0; i < activeTables.length; i++){
        tempCollection += activeTables[i].collection;
    }
    return tempCollection
}

function addPlayers(){
    let tempPlayers = 0;
    for(let i = 0; i < activeTables.length; i++){
        if(activeTables[i].players !== "CAP" && activeTables[i].players !== "CLSD"){
            tempPlayers += activeTables[i].players;
        }
    }
    return tempPlayers
}

function assignOperator(){
    for(let i = 0; i < activeTables.length; i++){
        if(activeTables[i].profit >= 0){
            activeTables[i].operator = "+";
        }
        else{
            activeTables[i].operator = "-";
            activeTables[i].profit *= -1;
        }
    }
}

function checkDeadSpreads(){
    for(let i = 0; i < activeTables.length; i++){
        if(activeTables[i].players === 0 || activeTables[i].players === "CAP"){
            totalDeadSpreads++;
        }
    }
}

function createString(){
    theString = "<h2>Template</h2><p>" + updateTime + " UPDATE</p>";
    for(let i = 0; i < activeTables.length; i++){
        if(activeTables[i].capped !== true && activeTables[i].closed !== true){
            theString += "<p>" + activeTables[i].tableName + ": " + activeTables[i].operator + "$" + activeTables[i].profit + " C-$" + activeTables[i]. collection + " | " + activeTables[i].players + "p</p>";
        }
        else{
            theString += "<p>" + activeTables[i].tableName + ": " + activeTables[i].operator + "$" + activeTables[i].profit + " C-$" + activeTables[i]. collection + " | " + activeTables[i].players + "</p>";
        }
    }
    if(totalProfit >= 0 ){
        theString += "<p>-------------------</p><p>Profit: +$" + totalProfit + "</p><p>Collection: $" + totalCollection + "</p>" + "<p>-------------------</p>" + "<p>Tables: " + totalTables + "</p>" + "<p>Dead-spreads: " + totalDeadSpreads + "</p>" + "<p>Capped: " + totalCapped + "</p><p>Players: " + totalPlayers + "p</p><p>-------------------</p>";
    }
    else{
        theString += "<p>-------------------</p><p>Profit: -$" + totalProfit*-1 + "</p><p>Collection: $" + totalCollection + "</p>" + "<p>-------------------</p>" + "<p>Tables: " + totalTables + "</p>" + "<p>Dead-spreads: " + totalDeadSpreads + "</p>" + "<p>Capped: " + totalCapped + "</p><p>Players: " + totalPlayers + "p</p><p>-------------------</p>";
    }
}


function genTemp(){
    updateTime = document.getElementById("time").value;
    theText.innerHTML = "<h2>Template</h2>"
    setObj();
    setActiveTables();
    totalProfit = addProfit();
    totalCollection = addCollection();
    checkIfCapped();
    checkIfClosed();
    checkDeadSpreads();
    totalPlayers = addPlayers();
    assignOperator();
    createString();
    totalCapped = 0;
    totalDeadSpreads = 0;
    totalTables = 0;
    theText.innerHTML = theString;
    activeTables = [];
    objArr = [];
    theString = "";

}
