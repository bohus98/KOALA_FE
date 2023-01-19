import React from "react";




export const TableRow2 = ({ person }) => {
  
  return (
    
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Nemesis ID</th>
          <th scope="col" class="px-6 py-3">Secrete Code</th>
          <th scope="col" class="px-6 py-3">Remove</th>
              {person?.children?.has_nemesis?.records.map(children => (children?.children?.has_secrete?.records.map(data => <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                  <td class="px-6 py-4" >{data.data.ID}</td>
                  <td class="px-6 py-4" >{data.data["Nemesis ID"]}</td>
                  <td class="px-6 py-4" >{data.data["Secrete Code"]}</td>
                  <td class="px-6 py-4 space-x-3">
                    <button class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button></td>
              </tr>)))}
          </thead>
  );
};
