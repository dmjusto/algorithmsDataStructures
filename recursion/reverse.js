// reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'

function reverse(str){
    if(str.length === 1) return str.charAt(0);
    let result = str.charAt(str.length - 1);
    return result += reverse(str.slice(0, str.length -1));
}
  
console.log(reverse('awesome'));
console.log(reverse('rithmschool'));