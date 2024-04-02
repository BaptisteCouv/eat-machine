export interface IMeals {
  _id: string;
  name: string;
  recurrence: boolean;
  dateSelect?: Date;
  mealTime?: Date;
  idCategory?: string;
  isActive?: boolean;
}
