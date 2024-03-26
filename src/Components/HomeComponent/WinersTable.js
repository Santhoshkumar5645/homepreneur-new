import React from "react";

export default function WinnersTable() {
  const Winnersdata = [
    {
      id: "YU1048",
      Name: "Varsheni",
      location: "Dr MGR educational research institute ",
    },
    {
      id: "YU1014",
      Name: "Ramya Shankar",
      location: "Bishop Heber college ",
    },
    {
      id: "YU1024",
      Name: "Thegarin Nisha ",
      location: "Muslim Arts College ",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    Institute
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">

              {Winnersdata.map((list, index) => (
                <tr>
                  <td className="px-6 py-4 text-center text-sm font-medium text-gray-800 whitespace-wrap">
                    {list.id}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-800 whitespace-wrap">
                  {list.Name}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-800 whitespace-wrap">
                  {list.location}
                  </td>
                </tr>))}
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
