/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useQuery } from "@apollo/client";
import { RECIPES_ADDED_BY_USER } from "../graphql/queries";
import { IRecipe } from "../types";

interface I {
  recipesAddedByCurrentUser: IRecipe[]
}

const useGetAddedRecipesByUser = () => {
  const { data, loading } = useQuery<I>(RECIPES_ADDED_BY_USER, {
    fetchPolicy: 'cache-and-network'
  });

  return { data, loading };
};

export default useGetAddedRecipesByUser;