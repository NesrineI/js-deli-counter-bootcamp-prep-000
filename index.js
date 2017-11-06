
function takeANumber(line, person){
  line.push(person)
  return (`Welcome, ${person}. You are number ${line.indexOf(person)+1} in line.`)
}
