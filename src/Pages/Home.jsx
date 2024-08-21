import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { 
  tree1, tree10, tree11, tree12, tree13, tree14, tree15, tree16, 
  tree17, tree18, tree19, tree2, tree20, tree3, tree4, tree5, tree6, 
  tree7, tree8, tree9, tree 
} from '../assets';
import GardenSvg from '../Components/Garden';
import Navbar from '../Components/Navbar/Navbar';

const trees = [
  { id: 1, name: 'Saksaul daraxti', age: 12, location: 'Shimoli-g‘arbiy burchak', health: 'Yaxshi', image: tree },
  { id: 2, name: 'Qizil palma daraxti', age: 21, location: 'Janubi-sharqiy burchak', health: 'O‘rta holatda', image: tree1 },
  { id: 3, name: 'Yoshil palma daraxti', age: 35, location: 'Markaz', health: 'Yaxshi', image: tree2 },
  { id: 4, name: 'Ficus daraxti', age: 64, location: 'Shimoli-sharqiy burchak', health: 'Yaxshi', image: tree3 },
  { id: 5, name: 'Rhododendron daraxti', age: 56, location: 'Janubi-g‘arbiy burchak', health: 'Yaxshi', image: tree4 },
  { id: 6, name: 'Pine daraxti', age: 65, location: 'Shimoli-markaz', health: 'O‘rta holatda', image: tree5 },
  { id: 7, name: 'Malus daraxti', age: 17, location: 'G‘arbiy burchak', health: 'Yaxshi', image: tree6 },
  { id: 8, name: 'Meyvali yer pichan daraxti', age: 18, location: 'Janubi-g‘arbiy burchak', health: 'O‘rta holatda', image: tree7 },
  { id: 9, name: 'Yashil yunon pinas daraxti', age: 9, location: 'Markaz', health: 'Yaxshi', image: tree8 },
  { id: 10, name: 'Prunus daraxti', age: 20, location: 'Shimoli-g‘arbiy burchak', health: 'Yaxshi', image: tree9 },
  { id: 11, name: 'Jasmin daraxti', age: 31, location: 'Janubi-sharqiy burchak', health: 'O‘rta holatda', image: tree10 },
  { id: 12, name: 'Tug‘ora daraxti', age: 15, location: 'Markaz', health: 'Yaxshi', image: tree11 },
  { id: 13, name: 'Tulip daraxti', age: 22, location: 'Shimoli-sharqiy burchak', health: 'Yaxshi', image: tree12 },
  { id: 14, name: 'Akasia daraxti', age: 14, location: 'Janubi-g‘arbiy burchak', health: 'O‘rta holatda', image: tree13 },
  { id: 15, name: 'Betula daraxti', age: 52, location: 'Shimoli-markaz', health: 'Yaxshi', image: tree14 },
  { id: 16, name: 'Qizil chinor daraxti', age: 36, location: 'G‘arbiy burchak', health: 'O‘rta holatda', image: tree15 },
  { id: 17, name: 'Ketun daraxti', age: 12, location: 'Janubi-g‘arbiy burchak', health: 'Yaxshi', image: tree16 },
  { id: 18, name: 'O‘rik daraxti', age: 42, location: 'Markaz', health: 'Yaxshi', image: tree17 },
  { id: 19, name: 'Yong‘oq daraxti', age: 17, location: 'Shimoli-g‘arbiy burchak', health: 'O‘rta holatda', image: tree18 },
  { id: 20, name: 'Meyvali chinor daraxti', age: 10, location: 'Janubi-sharqiy burchak', health: 'Yaxshi', image: tree19 },
  { id: 21, name: 'Kedr daraxti', age: 121, location: 'Shimoli-g‘arbiy burchak', health: 'Yaxshi', image: tree20 },
];

const Home = () => {
  const [selectedTree, setSelectedTree] = useState(null);

  const handleTreeClick = (e) => {
    const treeId = e?.target?.getAttribute('data-id');
    const tree = trees?.find(t => t?.id === parseInt(treeId, 10));
    setSelectedTree(tree);
  };

  return (
   <>
   <Navbar/>
    <div className="container">
      <div className="garden-container">
        <GardenSvg onClick={handleTreeClick} />
        {selectedTree && (
          <Link to={`/about/${selectedTree?.id}`} className="tree-info">
            <img src={selectedTree?.image} alt={selectedTree?.name} className="tree-image" />
            <div>
              <h2>{selectedTree?.name}</h2>
              <p><strong>Yoshi:</strong> {selectedTree?.age} yil</p>
              <p><strong>Joylashuvi:</strong> {selectedTree?.location}</p>
              <p><strong>Sog'lig'i:</strong> {selectedTree?.health}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
   </>
  );
};

export default Home;
