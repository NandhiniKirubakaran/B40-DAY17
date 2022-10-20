let counter = document.querySelector(".counter");

setTimeout(function(){
    counter.innerHTML="10";
    setTimeout(function(){
        counter.innerHTML="9";
        setTimeout(function(){
            counter.innerHTML="8";
            setTimeout(function(){
                counter.innerHTML="7";
                setTimeout(function(){
                    counter.innerHTML="6";
                    setTimeout(function(){
                        counter.innerHTML="5";
                        setTimeout(function(){
                            counter.innerHTML="4";
                            setTimeout(function(){
                                counter.innerHTML="3";
                                setTimeout(function(){
                                    counter.innerHTML="2";
                                    setTimeout(function(){
                                        counter.innerHTML="1";
                                        setTimeout(function(){
                                            counter.innerHTML="Happy Independence Day";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);