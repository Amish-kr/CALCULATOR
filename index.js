let result = document.getElementsByClassName("textbox");
let calculate =(obj)=> {
 result.value += obj;
}
let equal = ()=> {
  try{
  result.value = eval(result.value);
}
catch {
  alert('Enter valid input');
}
}
let removeall = ()=> {
  result.value = "";
}
let removeone = ()=> {
  result.value = result.value.slice(0,-1);
}
