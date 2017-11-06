
function takeANumber(line, person){
  line.push(person)
  return (`Welcome, ${person}. You are number ${line.indexOf(person)+1} in line.`)
}
function nowServing(line){
  if(line.length==0){
    return ("There is nobody waiting to be served!")
  }
  else{
    var person = line[0];
    line[0].shift()
    return (`Currently serving ${person}.`)
  }
}