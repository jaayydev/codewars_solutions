// 8 KYU
function defineSuit(card) {

    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 

    }

// Alternative solution with switch statement
function defineSuit(card) {

    let suit = card.charAt(card.length - 1)
    
    switch (suit) {
        case '♣':
            return "clubs"
            break;
        case '♦':
            return "diamonds"
            break;
        case '♥':
            return "hearts"
            break;
        case '♠':
            return "spades"
            break;
    }
  }
