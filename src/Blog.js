import React from 'react';

const Blog = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-bold mb-2">Ut enim ad minima</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet</h3>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-bold mb-2">13.26</h3>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;