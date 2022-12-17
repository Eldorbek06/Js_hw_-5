// let name = 'Alex'.toLowerCase()

// let money = 10000

// let account = 7777

// let userName = prompt('Your name:').trim().toLowerCase()

// if(userName == name) {
//     let userAccount = +prompt('Account number:').trim()

//     if(userAccount == account) {
//         let cashOut = +prompt('Cash out:').trim()

//         if(money >= cashOut){
//             alert(`You cash out: ${cashOut}`)
//             alert(`Cash left: ${money - cashOut}`)

//             console.log(`User ${userName[0].toUpperCase() + userName.slice(1)} cash out: ${cashOut}`);
//             console.log(`User ${userName[0].toUpperCase() + userName.slice(1)} cash left: ${money - cashOut}`);
//         } else {
//             alert('Insufficient funds.')
//         }
//     } else {
//         alert('Wrong account number.')
//     }
// } else {
//     alert(`User ${userName[0].toUpperCase() + userName.slice(1)} is not found.`)
// }


let name = prompt('Your name:')

if (name[0].toLowerCase() === 'a') {
    let age = +prompt('Age:')

    if (age >= 20 && age <= 40) {
        let money = +prompt('How much money($) do you have?')

        if (money >= 100) {
            let people = +prompt('How many of you')

            if (people >= 1 && people <= 10) {
                alert(`You're welcome.`)
            } else { 
                alert('Not enough place!')
            }
        } else {
            alert('Not enough cash!')
        }
    } else {
        alert('You are not allowed!')
    }
} else {
    alert('You are not allowed!')
}