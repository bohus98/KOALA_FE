import React from "react";
import { ExpendableButton } from "./ExpendableButton";
import useOpenController from "../Hooks/useOpenController";
import {TableRow2} from "./TableRow2";

export const TableRow = ({ person}) => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <th scope="col" class="p-4"></th>
      <th scope="col" class="px-6 py-3">ID</th>
      <th scope="col" class="px-6 py-3">Character ID</th>
      <th scope="col" class="px-6 py-3">Is alive?</th>
      <th scope="col" class="px-6 py-3">Years</th>
      <th scope="col" class="px-6 py-3">Remove</th>
        {person?.children?.has_nemesis?.records.map(data => <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="button-td">
              <ExpendableButton isOpen={isOpen} toggle={toggle} />
            </td>
          <td class="px-6 py-4" >{data.data.ID}</td>
          <td class="px-6 py-4" >{data.data["Character ID"]}</td>
          <td class="px-6 py-4" >{data.data["Is alive?"]}</td>
          <td class="px-6 py-4 " >{data.data.Years}</td>
          <td class="flex items-center px-6 py-4 space-x-3">
          <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a></td>
        </tr>)}
        {isOpen && <TableRow2 person={person} />}
      </thead>
      
  );
};
