$(document).ready(function() {
	// var submit = $("#them");
	// submit.click(function(event) {
	// 	$("#input1").append("<input name='example[]' value='xem nao' type='text'/>");
	// });
        // $("form#myform").append("<input name='example2' value='done' type='text'/>")

      })

$(function() {
// if (typeof(Storage) !== 'undefined') {
//     localStorage.setItem('javascript', 'học tại toidicode.com');
// }
	// localStorage.clear();
  $("#codesp").keypress(function(e) {
        // var data =[];
    if(e.which == 13) {
      if ($(this).val().length > 0) {
          // {'code':}
        e.preventDefault();
        var code = $(this).val();
      var field = '<tr> <input name="code[]" type="hidden" placeholder="ma san pham"  class="form-control" value="'+code+'" /> <td>'+code+'</td> <td>Ten demo 1</td> <td><input name="number[]" type="text" placeholder="so luong" value="1"  class="form-control" /></td> <td>100</td> </tr>';
      // var field = '<li><input name="code[]" type="text" placeholder="ma san pham" disabled="disabled" value="'+code+'"  class="form-control" /></li> <li> <input name="name[]" type="text" placeholder="Name" disabled="disabled" class="form-control"  /> </li> <li> <input name="number[]" type="text" placeholder="so luong" value="1"  clơass="form-control" /> </li> <li> <input name="thanhtien[]" type="text" placeholder="E-Mail" disabled class="form-control" > </li>'; 
      ;
      $(this).val("");
      $("#fieldList").append(field);
      // /set dữ liệu
      if (localStorage.getItem(code)) {
        localStorage.code = localStorage.getItem(code) + 1;
      }else{
        localStorage.code = 1;
      }
      // localStorage.setItem('code[]', code);
      // console.log(data);
      }
    	

        // alert('You pressed enter!');
    }
});
// var data = localStorage.getItem();
if (localStorage.length > 0) {
//   console.log(data);
alert(localStorage.length);
}
  // $("#codesp").enterKey(function(e) {
  //   e.preventDefault();
  //   $("#fieldList").append("<li>&nbsp;</li>");
  //   $("#fieldList").append("<li><input type='text' name='name[]' placeholder='Name' /></li>");
  //   $("#fieldList").append("<li><input type='text' name='phone[]' placeholder='Phone' /></li>");
  //   $("#fieldList").append("<li><input type='text' name='email[]' placeholder='E-Mail' /></li>");
  // });
});

// $(function() {
//   $("#addMore").click(function(e) {
//     e.preventDefault();
//     $("#fieldList").append("<li>&nbsp;</li>");
//     $("#fieldList").append("<li><input type='text' name='name[]' placeholder='Name' /></li>");
//     $("#fieldList").append("<li><input type='text' name='phone[]' placeholder='Phone' /></li>");
//     $("#fieldList").append("<li><input type='text' name='email[]' placeholder='E-Mail' /></li>");
//   });
// });