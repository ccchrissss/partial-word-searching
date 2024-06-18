function wordSearch(query, arr){
  
  let stringsContainingQuery = []
  
  arr.forEach( e => {
    
    if (e.toLowerCase().includes(query.toLowerCase())) stringsContainingQuery.push(e)

  })
  
  return stringsContainingQuery.length === 0 ? ['Empty'] : stringsContainingQuery
}

console.log(wordSearch('hi', ['hippo', 'rhino', 'lion', 'bear']))


// parameters: query, arr   // the query string to search for, the array of strings to search within
// return: stringsContainingQuery   // an array of the strings containing the search query
// e.g. wordSearch('hi', ['hippo', 'rhino', 'lion', 'bear'])
// results in ['hippo', 'rhino']


// create a new array called stringsContainingQuery
// loop through arr checking if each element.toLowerCase()  includes the substring query
// if yes, push it to stringsContainingQuery
// end loop
// return stringsContainingQuery