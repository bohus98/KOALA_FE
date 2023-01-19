import React from "react";
import { ExpendableButton } from "./ExpendableButton";
import { TableRow } from "./TableRow";
import useOpenController from "../Hooks/useOpenController";



export const TableSection = ({ person, handleDeleteClick }) => {
  const { isOpen, toggle } = useOpenController(false);

  return (
    
    <tbody class="text-xs uppercase bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="px-6 py-4" className="button-td">
        <ExpendableButton isOpen={isOpen} toggle={toggle} />
      </td>
    <td class="px-6 py-4 " >{person.data.ID}</td>
    <td class="px-6 py-4" >{person.data.Name}</td>
    <td class="px-6 py-4">{person.data.Gender}</td>
    <td class="px-6 py-4" >{person.data.Ability}</td>
    <td class="px-6 py-4" >{person.data["Minimal distance"]}</td>
    <td class="px-6 py-4" >{person.data.Weight}</td>
    <td class="px-6 py-4" >{person.data.Born}</td>
    <td class="px-6 py-4">{person.data["In space since"]}</td>
    <td class="px-6 py-4" >{person.data["Beer consumption (l/y)"]}</td>
    <td class="px-6 py-4" >{person.data["Knows the answer?"]}</td>
    <td class="px-6 py-4 space-x-3" ><a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={()=> handleDeleteClick(person.data.ID)}>Remove</a></td>
    </tr>
      
      {isOpen && <TableRow person={person} handleDeleteClick={handleDeleteClick} />}
    </tbody>
  );
 
};
