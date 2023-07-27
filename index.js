function formatMoney(value) { // o nome da função com parametro 
    valeu = Math.ceil(value * 100) / 100
    value = value.toFixed(2) // o toFixed vai fixar em 2 casas 
    return ' $ ' + value
}

function formatSlipt(value) {
    if (value == 1)
        return value + 'person'
    return value + 'people'
}


function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = bill * (tipPercent / 100)
    let billtotal = bill + tipValue
    let billEach = billtotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + '%'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billtotal)
    document.getElementById('billEach').innerHTML = formatMoney(billtotal / split)
    document.getElementById('splitValue').innerHTML = formatSlipt(split)

}