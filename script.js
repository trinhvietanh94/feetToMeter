    function validate(type) {
        if(document.form1.textinput.value=='')
        {
        alert('nhap so');
        return false;
        }else{
    if(type=="to_feet"){
    var res=3.2808*document.form1.textinput.value;
    var unit=" feet";
    }else{
    var res=0.3048*document.form1.textinput.value;
    var unit=" meter";

    }
    document.getElementById("result").innerHTML=res.toFixed(2) + unit;
    return false;
        }
    }