var str = '<table align = "center" border = "1px" width = "90%">';
for(var i = 1; i < 5; i++){
  str += '<tr>';
    for(var j = 1; j < 10; j++){
      str += '<td>';
          str += i*j;
      str += '</td>';
    }
  str += '</tr>';
}

str += '</table>';
var el = document.getElementById('box');
el.innerHTML += str;

/*document.write(str);*/

var str_2 = '<ul>';
for(var k = 1; k < 2; k++){
    for(var m = 1; m <= 7; m++){
      str_2 += '<li>';
        str_2 += 'Number - ' + m;
      str_2 += '</li>'
    }

  str_2 += '</ul>';
}

document.write(str_2);
