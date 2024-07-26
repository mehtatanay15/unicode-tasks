# Letter Frequency Counter

This JavaScript script counts the number of distinct letters in a given sentence and displays the frequency of each distinct letter according to their order of appearance.

## Working

The script takes a sentence as input.
It iterates through each character in the sentence.
It checks if the character has not been counted yet.
For each distinct letter, it counts its occurrences in the sentence.
It stores the letter and its count in an object.
Finally, it outputs the number of distinct letters and the frequency of each letter.

# Sorcerer Fetch
made specific routes and fetched the data(characters,spells,staff and students) from the given public api and displayed in json format.
And also made a get route which only gives the student of their specific id.

## Working
Set up different routes to fetch and display data for each category.
Add a special route to get details of a specific character by their unique ID.

# Hogwarts Guide to CRUD Magic 
use post request to add the student in a database and get request to display all the students in the database

## Working
Set up a structure for storing student data, fields like ID, name, gender, house, and whether they are a wizard.
After saving a new student, return the student’s details as a JSON response.

# The Expulsion Spell: Banishing Muggles
to delete a student by their id from the database

## Working
use delete request to delete the student from the database.After deleting the student,send back the deleted student as a JSON response.
use put request to update the student from the database.After updating the student,send back the updated student as a JSON response.


