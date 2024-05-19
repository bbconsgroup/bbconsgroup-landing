import React from 'react';

const Stats = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h2 className="text-3xl font-bold">109,493</h2>
          <p>Successful Projects</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">100,032,454</h2>
          <p>Active Users</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">13,459</h2>
          <p>Teams</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;