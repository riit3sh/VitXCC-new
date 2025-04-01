import React from 'react';
import { clubs } from '../data/clubs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ClubList({ category }) {
  const filteredClubs = category === 'all' 
    ? clubs 
    : clubs.filter(club => club.category === category);

  return (
    <div className="clubs-container" id="clubs">
      {filteredClubs.map(club => (
        <div key={club.id} className="club-card">
          <img src={club.image} alt={club.name} className="club-image" />
          <div className="club-info">
            <h3>{club.name}</h3>
            <p>{club.description}</p>
            {club.socialMedia && (
              <div className="club-social">
                <h4>Connect With Us</h4>
                <div className="social-links">
                  {club.socialMedia.instagram && (
                    <a href={club.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  )}
                  {club.socialMedia.facebook && (
                    <a href={club.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  )}
                  {club.socialMedia.linkedin && (
                    <a href={club.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClubList; 