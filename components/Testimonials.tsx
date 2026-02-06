import React, { useState } from 'react';
import { Testimonial } from '../types';

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        
        <div className="bg-white rounded-lg shadow-xl p-8 relative">
          <div className="text-6xl text-blue-600 mb-4">"</div>
          <p className="text-xl text-gray-700 mb-6">{testimonials[current].content}</p>
          
          <div className="flex items-center gap-4">
            {testimonials[current].avatar && (
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].author}
                className="w-16 h-16 rounded-full"
              />
            )}
            <div>
              <div className="font-bold">{testimonials[current].author}</div>
              <div className="text-gray-600">{testimonials[current].title}</div>
              <div className="text-gray-500">{testimonials[current].company}</div>
            </div>
          </div>
          
          {testimonials.length > 1 && (
            <div className="flex gap-2 justify-center mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition ${
                    idx === current ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
