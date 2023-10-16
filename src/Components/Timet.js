import React from 'react';
import Timetable from 'react-timetable';
import { useState ,useEffect} from 'react';
const data="hello";
function Timet() {
  const [timetable, setTimetable] = useState(data);

  const handleTimetableChange = (newTimetable) => {
    setTimetable(newTimetable);
  };

  return (
    <div>
      
      <h2>hello</h2>
      
    </div>
  );
}
export default Timet;