var counter = 1
var rnum =  Math.floor(Math.random() * 100) + 1;
var num = document.getElementById("number")
num.innerHTML = rnum;

var multiply =  setInterval(function(){
  if (counter > 10){
      clearInterval(multiply)
  } else {
      mul()
  }
}, 1000);

function mul (){
 console.log(`${rnum} * ${counter} = ${rnum * counter++}`)
}