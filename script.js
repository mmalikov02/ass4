const startingBid = document.getElementById("startingbid");
const nameOfBride = document.getElementById("name");
const education = document.getElementById("education");
const networth = document.getElementById("Worth");
const caste = document.getElementById("caste");
const skills = document.getElementsByName("skills");
const age = document.getElementsByName("type");
const reputation = document.getElementsByName("reputation");
const letter = document.getElementById("loveLetter");

const calculate = () => {
    let price = Number(startingBid.value); 
    let name = nameOfBride.value;

    if (name == "" || price == 0) {
        alert("Error! Please, enter Bride's name and Starting bid!");
    }
    else {
        price = dropdown(education, price);
        price = dropdown(networth, price);
        price = dropdown1(caste, price);
        price = getCheckboxValuesFilterReduce(skills, price);
        price = getRadioValue(age, price);
        price = getCheckboxValuesForLoop(reputation, price);

        let person = {
            bride_name: name,
            bride_price: price,
            letter_to_bride: letter.value
        }
        document.getElementById("result").innerHTML = `The price for your bride ${person.bride_name} is $${person.bride_price}.\nYour love letter is "${person.letter_to_bride}"`;
    }//output
}


const dropdown = (id, price) => {
    price = price * Number(id.value);
    return price;
}

const dropdown1 = (id, price) => {
    price = price + Number(id.value);
    return price;
}

const getCheckboxValuesFilterReduce = (html_collection, price) => { 
    let list = Array.from(html_collection).filter(filteration) 
    let result = list.reduce(reducer, price)
    return result;
}

const reducer = (accumulator, item) => {
    return accumulator + Number(item.value);
}
const filteration = (item) => {
    return item.checked;
}


const getRadioValue = (node_list, price) => {
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

const getCheckboxValuesForLoop = (html_collection, price) => {
    for (let i = 0; i < html_collection.length; i++) {
        if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
            price = price + Number(html_collection[i].value)
        }
        else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) { 
            price = price * Number(html_collection[i].value)
        }
    }
    return price;
}

document.querySelector("button").addEventListener("click", calculate);