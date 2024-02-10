// Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="p-4 text-center">
            <img
                src="/profile_cropped.jpg"
                alt="Sithungu"
                className="rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'contain' }}
            />
            <h2 className="display-4" style={{ fontSize: '30px' }}>Siphesihle Philezwini Sithungu</h2>
            <p className="lead" style={{ marginBottom: '0px' }}>Lecturer</p>
            <p className="lead" style={{ marginBottom: '0px' }}>University of Johannesburg</p>
            <p className="lead" style={{ marginBottom: '0px' }}>South Africa</p>
            <div className="d-flex justify-content-center mt-4">
                <a href="https://www.linkedin.com/in/sithungu/" className="me-2" target="_blank" rel="noopener noreferrer">
                    <img src="linkedin.png" alt="LinkedIn" height="30" width="30"/>
                </a>
                <a href="https://www.researchgate.net/profile/Siphesihle-Sithungu-2" className="me-2" target="_blank" rel="noopener noreferrer">
                    <img src="researchgate.png" alt="ResearchgGate" height="30" width="30"/>
                </a>
                <a href="https://scholar.google.com/citations?user=CEMtgZIAAAAJ&hl=en&oi=ao" className="me-2" target="_blank" rel="noopener noreferrer">
                    <img src="googlescholar.png" alt="GoogleScholar" height="30" width="30"/>
                </a>
                <a href="https://orcid.org/0000-0001-8073-6998" className="me-2" target="_blank" rel="noopener noreferrer">
                    <img src="orcid.svg" alt="Orcid" height="30" width="30"/>
                </a>
                <a href="https://www.scopus.com/authid/detail.uri?authorId=57209576078" className="me-2" target="_blank" rel="noopener noreferrer">
                    <img src="scopus.png" alt="Scopus" height="30" width="30"/>
                </a>
            </div>
        </header>
    );
};

export { Header };
