import MealsItem from './MealsItem';

function MealsList(props){
    const {meals}=props;

   return (
    <div className="list"> 
    {meals.map(el=>
        <MealsItem key={el.idMeal} {...el} />
    )}
    </div>  )

}

export default MealsList


