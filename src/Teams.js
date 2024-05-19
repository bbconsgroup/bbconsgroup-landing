import React from 'react';

const Teams = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">More than 1 million teams and 10 million developers love UDIX</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 bg-gray-100 shadow rounded">Trial periods always make for great bait. It’s not too committed</div>
          <div className="p-4 bg-gray-100 shadow rounded">Create user stories and issues, plan sprints and distribute tasks across your software team</div>
          <div className="p-4 bg-gray-100 shadow rounded">Prioritize and discuss your team’s work in full context with complete visibility</div>
        </div>
        <img class="w-full" src="https://source.unsplash.com/random/800x600" alt="Random Photo"></img>
      </div>
    </section>
  );
}

export default Teams;