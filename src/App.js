import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from  "./Components/Navbar";
import Filter from  "./Components/Filter"
import Cards from  "./Components/Cards";
import Loader from "./Components/Loader";
import { toast } from "react-toastify";

function App() {

  const [courses , setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  
  // Fetch data from API
  async function fetchData(){
    setLoading(true);
    try{
      const result = await fetch(apiUrl);
      const output = await result.json();
      
      setCourses(output.data);
    } 
    catch(err){
      toast.error("Error occured while fetching the data!");
    }
    setLoading(false);
  }
  useEffect(() =>{
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-700">
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} category ={category} setCategory ={setCategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap 
            justify-center items-center min-h-[50vh]" >
        {
          loading ? (<Loader/>):(<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>
  );
}

export default App;
