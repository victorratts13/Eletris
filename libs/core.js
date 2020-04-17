$(document).ready(function(){
    $('#submits').click(function(){
        var testes = $('#inputs');
        testes = testes.val();

        var simple = testes.split(';;');
        var M5, PAIR, TIME, METHOD;

        let x, resulted;
        for(x = 0; x < simple.length; x++){
            M5 = simple[x].substring(0, 4)
            PAIR = simple[x].substring(4, 11);
            TIME = simple[x].substring(11, 17);
            METHOD = simple[x].substring(17, 25);

            resulted += TIME+PAIR+METHOD+M5+`\n`;
           //console.log(resulted)
            // if(TIME.substring(0, 1) == ';'){
            //     TIME.substring(1, 10);
            // }else{
            //     //console.log(TIME.substring(2, 15))
            //     if(TIME.substring(0, 1) == ';'){
            //         TIME = simple[x].substring(11, 18);
            //     }
            // }

            // if(METHOD == 'LL'){
            //     METHOD = 'CALL'
            // }else{
            //     if(METHOD.substring(0, 1) == ';C'){
            //         //console.log('teste'+ METHOD.substring(0, 2) )
            //         METHOD = 'CALL'
            //     }
            //     if(METHOD.substring(0, 1) == ';P'){
            //         METHOD = 'PUT'
            //     }
            //     if(METHOD == ';PUT'){
            //         METHOD = 'PUT'
            //     }
            //     if(METHOD == ';CALL'){
            //         METHOD = 'CALL'
            //     }
            // }
            // //console.log('teste'+ METHOD.substring(0, 2) )
            // if(M5.substring(0, 2) == "  "){
            //     if(M5 !== 'M5'){
            //         M5 = simple[x].substring(2, 5)
            //     }else{
            //         M5 = simple[x].substring(2, 4)
            //     }
            //     //console.log(M5)
            // }
            // if(PAIR.substring(0, 1) == ';'){
            //     if(PAIR.substring(0, 1) == 5 || PAIR.substring(0, 2) == 0){
            //         PAIR = simple[x].substring(7, 11);
            //     }else{
            //         PAIR = simple[x].substring(6, 11);
            //     }
            // }else{

            //     //console.log([M5])
            // }
            //resulted += 
        }

        //console.log(testes)
        $('#show').text(resulted);

    })
})