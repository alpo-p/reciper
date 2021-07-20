import { useMutation } from "@apollo/client";
import { DELETE_RECIPE } from "../graphql/mutations";
import { RECIPES_ADDED_BY_USER } from "../graphql/queries";

const useDeleteRecipe = () => {
  const [deleteR] = useMutation(DELETE_RECIPE);
  
  const deleteRecipe = async (recipeID: string) => {
    void await deleteR({
      variables: { recipeID },
      refetchQueries: [{ query: RECIPES_ADDED_BY_USER }]
    });
  };

  return { deleteRecipe };
};

export default useDeleteRecipe;