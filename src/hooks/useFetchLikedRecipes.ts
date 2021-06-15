/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useQuery } from "@apollo/client";
import { LIKED_RECIPES } from "../graphql/queries";
import { IAllLikedRecipes } from "../types";

const useGetRecipes = () => {
  const { data, loading } = useQuery(LIKED_RECIPES, {
    fetchPolicy: 'cache-and-network'
  });

  const recipes: IAllLikedRecipes = { data };

  return { recipes, loading };
};

export default useGetRecipes;
