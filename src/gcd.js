     function calculate(form){
        form.result.value = gcd(parseInt(form.data1.value),parseInt(form.data2.value))
       }

  
     function gcd(m,n){
       return (n==0 ? m : gcd(n,m%n));
       }