import { useEffect, useState } from "react";
import Search from "../components/Search";
import Restaurants from "../components/Restaurants";
import RestaurantService from "../services/restaurant.service"
import Swal from "sweetalert2";
import Box from "../components/Box";


export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); 
  useEffect(() => {
    const getRestaurants = async ()=>{
      try {
        //เรียกใช้ getAllRestaurant() จาก service ไม่ใช่ getRestaurants ที่เป็น const getRestaurant
      const response = await RestaurantService.getAllCourse();
      if(response.status === 200) {
        setRestaurants(response.data);
        setFilteredRestaurants(response.data);
      }
    } catch (error){
      Swal.fire({
        title: "Get All Academic",
        text: error?.response?.data?.message || error.message,
        icon:"error",  
      });
    }
  };
    getRestaurants();
  }, []);
  return (
      <div className="container mx-auto">
        <Search 
        restaurants={restaurants} 
        setFilteredRestaurants={setFilteredRestaurants} />
        <Box courses={filteredRestaurants}/>
        <Restaurants restaurants={filteredRestaurants} />
      </div>
  );
}

