const url='https://www.themealdb.com/api/json/v1/1/';

const getAllCategories= async ()=>{
    const response= await fetch(url+'categories.php');
    return await response.json();
};

const getFilteredCategory=async (catName)=>{
    const response=await fetch(url+'filter.php?c='+catName)
    return await response.json()
};

const getMealById=async (mealId)=>{
    const response=await fetch(url+'lookup.php?i='+mealId)
    return await response.json()
};

export {getAllCategories, getFilteredCategory, getMealById}