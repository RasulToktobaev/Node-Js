function isPalindrome(str) {
    // Удаляем все ненужные символы и приводим строку к нижнему регистру
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Сравниваем очищенную строку с её обратной версией
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Примеры использования функции
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true
