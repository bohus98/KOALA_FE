import React, {useState} from "react";
import data from "../data/info.json";
import { TableSection } from "./TableSection.jsx";

export const Table = () => {

  const [persons, setPersons] = useState(data)
  const handleDeleteClick = (personId) => {
    const newPersons = [...persons];
    const index = persons.findIndex((person)=> person.data.ID === personId);
    newPersons.splice(index, 1);
    setPersons(newPersons);
    console.log(newPersons);
  } 
  return (
    
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <th scope="col" class="p-4"></th>
        <th scope="col" class="px-6 py-3">ID</th>
        <th scope="col" class="px-6 py-3">Name</th>
        <th scope="col" class="px-6 py-3">Gender</th>
        <th scope="col" class="px-6 py-3">Ability</th>
        <th scope="col" class="px-6 py-3">Minimal distance</th>
        <th scope="col" class="px-6 py-3">Weight</th>
        <th scope="col" class="px-6 py-3">Born</th>
        <th scope="col" class="px-6 py-3">In space since</th>
        <th scope="col" class="px-6 py-3">Beer consumption</th>
        <th scope="col" class="px-6 py-3">Knows the answer?</th>
        <th scope="col" class="px-6 py-3">Remove</th>
      </thead>
      {persons.map((person) => (
        <TableSection person={person} handleDeleteClick={handleDeleteClick} />
      ))} 
      
    </table>
    
  );
  
};
