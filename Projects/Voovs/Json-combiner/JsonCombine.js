var q = [
  {name: "Ambleside", wealth: "Very high", type: "Residential area"},
  {name: "Windermere", wealth: "High - highest", type: "Residential area"},
  {name: "Glenridding", wealth: "High", type: "Residential area"}
]
var a = [
  {name: "Ambleside", type: "Residential area", size: "Somewhere in between"},
  {name: "Windermere", type: "Residential area", size: "Large"},
  {name: "Glenridding", type: "Residential area", size: "Small"}
]

/**
 * Combines given parsed json objects with no duplicates
 * @param  {[Pared Json object]} json1          [description]
 * @param  {[Pared Json object]} json2          [description]
 * @param  {[String]} commonProperty [Property found in both Json objects]
 * @param  {[String]} Ex... [Extra arguments will be read as additional common properties]
 * @return {[console.log]}                [Logs Json combined object to console]
 * @return {[Json object]}                [Returns Json combined object (may be useful for UI implementation)]
 */
function combineJsonObjects(json1, json2, commonProperty) {
  var commonProperties = []
  for (var argument of arguments) {
    if (argument != json1 && argument != json2) {
      commonProperties.push(argument)
    }
  }

  var newJson = findMatch(json1,json2,commonProperties)

  if (confirm("Would you like your JSON stringified?")) {
    newJson = JSON.stringify(newJson)
  }
  console.log(newJson)
  return newJson
}
/**
 * Combines given objects based on common properties
 * @param  {[Objects nested in array]} json1      [Parsed JSON file]
 * @param  {[Objects nested in array]} json2      [Parsed JSON file]
 * @param  {[Array]} commonList [Contains strings of property names that are common in both json1 and json2]
 * @return {[Object nested in array]}            [description]
 */
function findMatch(json1, json2, commonList) {
  var newJson = []
  for (var property of commonList){ //one is a static common property
    for(var object1 of json1) { for(var object2 of json2) {
      if (object1[property] == object2[property]) {
        newJson.push(combineObjects(object1,object2))
      }
    }}
  }
  return newJson
}

/**
 * Combines to objects without duplicates
 * @param  {[Object]} object1 [An object]
 * @param  {[Object]} object2 [An object]
 * @return {[Object]}         [Combination of previous objects]
 */
function combineObjects(object1, object2){
  var combinedObject = object1
  for (var property in object2) {
    if (combinedObject[property] === undefined) {
      combinedObject[property] = object2[property]  //Adds all properties missing in combinedObject
    }
  }
  return combinedObject
}
