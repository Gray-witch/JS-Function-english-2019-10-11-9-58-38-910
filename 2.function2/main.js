function palindrome(message){
        // wirte your code here
        var arr = message.split('');
        console.log(arr)
        for (let i = 0,j=arr.length-1; i < j; i++, j--) {
            if(arr[i] != arr[j]){
                console.log(false) ;
                return;
            }
        }
        console.log(true);
    }
    palindrome('hello'); // should return false
    palindrome('abcba'); // should return true
