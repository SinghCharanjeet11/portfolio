import React from 'react';
import { PersonalProfile } from '../types/profile';

export interface AboutProps {
  profile: PersonalProfile;
}

const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={profile.profileImage.src}
            alt={profile.profileImage.alt}
            className="rounded-lg shadow-xl w-full"
          />
          
          <div>
            <p className="text-lg text-gray-700 mb-6">{profile.bio}</p>
            
            <div className="space-y-3 mb-6">
              <div><span className="font-semibold">Location:</span> {profile.location}</div>
              <div><span className="font-semibold">Email:</span> <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline">{profile.email}</a></div>
              {profile.phone && <div><span className="font-semibold">Phone:</span> {profile.phone}</div>}
            </div>
            
            {profile.socialLinks && (
              <div className="flex gap-4">
                {profile.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
