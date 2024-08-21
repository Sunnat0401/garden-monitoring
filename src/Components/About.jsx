import React from 'react';
import { useParams } from 'react-router-dom';
import './Style.css'; // Make sure this path is correct
import Navbar from './Navbar/Navbar';

const About = ({ trees }) => {
  const { id } = useParams();
  const tree = trees?.find(t => t?.id === parseInt(id, 10));

  return (
 <>
 <Navbar/>
    <div className="tree-information">
      {tree ? (
        <>
          <img src={tree?.image} alt={tree?.name} className="tree-picture" />
          <div>
            <h2>{tree.name}</h2>
            <p><strong>Yoshi:</strong> {tree?.age} yil</p>
            <p><strong>Joylashuvi:</strong> {tree?.location}</p>
            <p><strong>Sog'ligi:</strong> {tree?.health}</p>
          </div>
        </>
      ) : (
        <p>Daraxt topilmadi!</p>
      )}
    </div>
 </>
  );
};

export default About;
