/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useQuery } from "@apollo/client";
import { GET_RECIPES } from "../graphql/queries";
import { IRecipes } from "../types";

const useGetRecipes = () => {
  const { data, loading } = useQuery(GET_RECIPES, {
    fetchPolicy: 'cache-and-network'
  });

  const recipes: IRecipes = { data };

  return { recipes, loading };
};

export default useGetRecipes;