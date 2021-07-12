import { useMutation } from "@apollo/client";
import { ADD_RECIPE } from "../graphql/mutations";
import { IRecipe } from "../types";

const useAddNewRecipe = () => {
  const [addNew] = useMutation(ADD_RECIPE);
  
  const addRecipe = async (recipe: Omit<IRecipe, 'id'>) => {
    void await addNew({
      variables: { ...recipe }
    });
  };

  return { addRecipe };
};

export default useAddNewRecipe;