const btn = document.getElementById('btn');
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');

btn.addEventListener('click', function(){
     inp1.value =  generatePassword();
     inp2.value =  generatePassword();
 })


function  generatePassword() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (let i = 1; i <= 10; i++) {
        let char = Math.floor(Math.random()
                    * str.length + 1);
          
        pass += str.charAt(char)
    }
      
    return pass;
}
