//Check prime
let num=15;
let check=0;
    for (let i=1;i<=num;i++){
        if (i%num==0){
            check++;
        }
        
        
    }
    if (check==1){
        console.log("Yes");
    }
    else {
        console.log("No");
    }
