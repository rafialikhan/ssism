# Tasks using Javascript map, filter and reduce functions
Use the [task.json](../master/team/task.json) file to do the following.

### Instruction
- Name your file, task-js.html or task-js.js, so i can quickly identify it, in your respective folders.

## MAP 
- use javascript map function to map the input objects to remove, id and company
- so that you are only left with a new collection / Array object that has the following properties/attributes.

### eg. input object
```
  {
    "_id": "5d18e5a5f0b338cc753cc2d8",
    "name": "Marks",
    "gender": "female",
    "location": "India",
    "dob": "10-20-1993",
    "company": "SKYBOLD"
  },

```

### eg. Expected output object after map (ofcourse you will have to get back an array of objects)
```
  {
    "name": "Marks",
    "gender": "female",
    "location": "India",
    "dob": "10-20-1993",
   },
```

## FILTER
- Use filter to return an array of only people who's location is India.
- Use filter to return an array of all people who were born after year 2000.

## Reduce 
- FEMALE- count of female

# Additional Task - extra 100 rewards
- Create a javascript function where you can pass the above 3 
- An Array of what properties to exclude/remove when you map. eg. [id, company, dob]. 
Tip: you may have to look at Object keys for this.

- Pass the filter criteria - filterBy = {location: "Bangladesh"}
- Reduce criteria ie. totalBy = {gender: "male"} 

eg. myTaskFunction(removeItems, filterBy, totalBy){
{
........
// Apply conditions of remove, loc
........
  returns {
          mapped: [....array of mapped object ....],
          filtered: [....array of filtered object ....],
          reduced: [....total of all the genders ....]
         }
}


