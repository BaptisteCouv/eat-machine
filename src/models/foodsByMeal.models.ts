import  { IFoodsNutritionals } from "@/models/foodsNutritionals.models"
export interface IFoodsByMeal {
  foodBindValue: IFoodsNutritionals;
  idFoodBind: string;
  quantity: number;
}
