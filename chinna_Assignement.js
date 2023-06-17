let details = {
    data: [{
            name: 'Mixmax',
            budget_name: 'Software subscription',
            owner_id: 1,
            spent: {
                value: 100,
                currency: "SGD"
            },
            available_to_spend: {
                value: 1000,
                currency: "SGD"
            },
            card_type: "burner",
            expiry: 9 + " " + "feb",
            limit: 100,
            status: 'active'
        },
        {
            name: 'Quickbooks',
            budget_name: 'Software subscription',
            owner_id: 2,
            spent: {
                value: 50,
                currency: "SGD"
            },
            available_to_spend: {
                value: 250,
                currency: "SGD"
            },
            card_type: "subscription",
            limit: 10,
            status: 'active'
        }
    ],
    page: 1,
    per_page: 10,
    total: 100
};
let {
    data
} = details;
document.getElementById("your");

let userDetailsEle = document.getElementById("userDetails");
let burnerCard = document.getElementById("burner");
let subscriptionCard = document.getElementById("subscription");
let filterEle = document.getElementById("filterIcon");
let subscriptionEle = document.getElementById("Subscription");

function displarCard() {
    userDetailsEle.classList.toggle("hide_card");
    burnerCard.textContent = "";
}
let yourEle = document.getElementById("your");
yourEle.onclick = function() {
    displarCard()
};

function burnerCardData(eachEle) {
    let cardtitle = ["Linkedin", "Marketing ads", "Offsite event", "Travel allowa...", "AWS card", "Netflix..."];
    for (let each of cardtitle) {
        console.log(each);
        let {
            name,
            budget_name,
            owner_id,
            spent,
            available_to_spend,
            card_type,
            expiry,
            limit,
            status
        } = eachEle;
        let divEle = document.createElement("div");
        divEle.classList.add("div_container");
        burnerCard.appendChild(divEle);
        let titleDiv = document.createElement("div");
        divEle.appendChild(titleDiv);
        titleDiv.classList.add("card_container");
        let titleEle = document.createElement("h1");
        titleEle.textContent = each;
        titleEle.classList.add("card_title");
        titleDiv.appendChild(titleEle);
        let para = document.createElement("p");
        para.textContent = "Memberfive . Budget";
        para.classList.add("card_para");
        titleEle.appendChild(para);
        let listDiv = document.createElement("div");
        titleDiv.appendChild(listDiv);
        let unorderList = document.createElement("ul");
        listDiv.appendChild(unorderList);
        let listone = document.createElement("li");
        listone.textContent = "AMOUNT";
        listone.classList.add("list_heading_value");
        unorderList.appendChild(listone);
        let listtwo = document.createElement("li");
        listtwo.textContent = "FREQUENCY";
        listtwo.classList.add("list_value");
        listone.appendChild(listtwo);
        let listthree = document.createElement("li");
        listthree.textContent = "EXPIRY";
        listthree.classList.add("list_value");
        listtwo.appendChild(listthree);
        let amountUnorderList = document.createElement("ul");
        listDiv.appendChild(amountUnorderList);
        let amountone = document.createElement("li");
        let {
            value,
            currency
        } = spent;
        amountone.textContent = value + " " + currency;
        amountUnorderList.appendChild(amountone);
        let amounttwo = document.createElement("li");
        amountone.classList.add("list_heading_value");
        amounttwo.textContent = "Monthly";
        amountone.appendChild(amounttwo);
        amounttwo.classList.add("list_value");
        let amountthree = document.createElement("li");
        amountthree.textContent = expiry;
        amountthree.classList.add("list_value");
        amounttwo.appendChild(amountthree);
        let line = document.createElement("button");
        listDiv.appendChild(line);
        line.classList.add("button");
        let spendlist = document.createElement("ul");
        listDiv.appendChild(spendlist);
        let spendlistAmount = document.createElement("li");
        spendlistAmount.textContent = "Spent";
        spendlistAmount.classList.add("list_heading_spent");
        spendlist.appendChild(spendlistAmount);
        let spentAmount = document.createElement("li");
        spentAmount.textContent = value + " " + currency;
        spendlistAmount.appendChild(spentAmount);
        spentAmount.classList.add("list_spent_value");
        let blancelist = document.createElement("ul");
        listDiv.appendChild(blancelist);
        let balancetitle = document.createElement("li");
        balancetitle.textContent = "Balance";
        blancelist.appendChild(balancetitle);
        balancetitle.classList.add("list_heading_balance");
        let balanceAmount = document.createElement("li");
        balanceAmount.textContent = available_to_spend.value + " " + available_to_spend.currency;
        balanceAmount.classList.add("list_spent_value");
        balancetitle.appendChild(balanceAmount);
    }
}

function customerCards(customerId) {
    for (let eachEle of data) {
        if (eachEle.owner_id === customerId) {
            burnerCardData(eachEle);
            console.log(eachEle.name);
        }
    }
}

function ownerIdDetails(id) {
    let customerId = parseInt(id);
    userDetailsEle.classList.toggle("hide_card");
    burnerCard.textContent = "";
    customerCards(customerId);
}
for (let eachData of data) {
    let {
        name,
        budget_name,
        owner_id
    } = eachData;
    var eachUser = document.createElement("div");
    userDetailsEle.appendChild(eachUser);
    eachUser.setAttribute("id", owner_id);
    eachUser.setAttribute("onclick", "ownerIdDetails(id)");
    eachUser.classList.add("user_details");
    var nameElement = document.createElement("h1");
    nameElement.textContent = "Name : " + name;
    nameElement.classList.add("name");
    eachUser.appendChild(nameElement);
    const budget_nameElement = document.createElement("p");
    budget_nameElement.textContent = "Budget_Name : " + budget_name;
    budget_nameElement.classList.add("budget");
    eachUser.appendChild(budget_nameElement);
    const ownerId = document.createElement("p");
    ownerId.textContent = "Owner_id : " + owner_id;
    ownerId.classList.add("owner");
    eachUser.appendChild(ownerId);
}