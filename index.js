function display(){
    var x = document.getElementById('select').value;

    if(x=='Finance'){
        document.getElementById('Finance').style.display = 'block'
        document.getElementById('Sales').style.display = 'none'
    }
    else if(x=='Sales & Marketing'){
        document.getElementById('Finance').style.display = 'none'
        document.getElementById('Sales').style.display = 'block'
    }
    else if(x == "All"){
        document.getElementById('Finance').style.display = 'block'
        document.getElementById('Sales').style.display = 'block'
    }
}

document.getElementById('input').addEventListener('keyup',keyupfun)

function keyupfun(){
    var a = document.getElementsByClassName('finance-detail');

    for(var i=0;i<a.length;i++){
        var val = document.getElementById('input').value.toLowerCase();

        if(a[i].innerHTML.toLowerCase().indexOf(val) != -1){
            a[i].style.display = ''
        }else{
            a[i].style.display = 'none'
        }
    }
}