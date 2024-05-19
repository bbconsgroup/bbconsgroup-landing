import React from 'react';

const Events = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Events</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Event</th>
                <th className="px-4 py-2">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">06/11</td>
                <td className="border px-4 py-2">Lorem ipsum dolor sit amet</td>
                <td className="border px-4 py-2">Berlin, Germany</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">08/11</td>
                <td className="border px-4 py-2">Duis aute irure dolor in reprehenderit</td>
                <td className="border px-4 py-2">London, UK</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">09/11</td>
                <td className="border px-4 py-2">Excepteur sint occaecat cupidatat non proident</td>
                <td className="border px-4 py-2">Moscow, Russia</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">10/11</td>
                <td className="border px-4 py-2">Lorem ipsum dolor sit amet</td>
                <td className="border px-4 py-2">Berlin, Germany</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">12/11</td>
                <td className="border px-4 py-2">Duis aute irure dolor in reprehenderit</td>
                <td className="border px-4 py-2">London, UK</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">12/11</td>
                <td className="border px-4 py-2">Excepteur sint occaecat cupidatat non proident</td>
                <td className="border px-4 py-2">Moscow, Russia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Events;