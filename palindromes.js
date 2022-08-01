function isPalindrome (str) {
    let strBackwards = ''
    for (let i = str.length - 1; i >= 0; i--) {
      strBackwards += str[i]
    }
    return str === strBackwards
  }
  
  console.log(isPalindrome('racecar')) 
  console.log(isPalindrome('shenanigans'))
  console.log(isPalindrome('mrowlatemymetalworm'))