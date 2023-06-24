import React from 'react';
import '../styles/Home.css';

function ProjectsSection() {
    return (
        <div className="sub-container">
        <h3> Projekty </h3>
        <table  className="projects-table">
        <tr>
            <th>
            <div>
                tranzycja.pl
            </div>
            </th>

            <th>
            <div>
                Klimat dla Rolnictwa
            </div>

            </th>
         </tr>
         </table>
        </div>
    )

}

export default ProjectsSection;