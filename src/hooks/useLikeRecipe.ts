import { useMutation } from "@apollo/client";
import { LIKE_RECIPE } from "../graphql/mutations";

const useLikeRecipe = () => {
  const [like] = useMutation(LIKE_RECIPE);
  console.log("liking recipe :)");
  

  const likeRecipe = async (recipeID: string) => {
    void await like({
      variables: { recipeID }
    });
  };

  return { likeRecipe };
};

export default useLikeRecipe;