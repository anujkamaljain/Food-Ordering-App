import { useEffect, useState } from "react";
import { MENU_URL, MENU_URL2 } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
      fetchMenu();
    }, []);

    const fetchMenu = async () => {
      const data = await fetch(MENU_URL + resId + MENU_URL2);
      const menu = await data.json();
      setResInfo(menu); 
    };

    return resInfo;

}

export default useRestaurantMenu;