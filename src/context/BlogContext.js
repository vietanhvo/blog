import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "deleteBlogPost":
      return state.filter((blogPost) => blogPost.id != action.payload)
    case "addBlog":
      return [
        ...state,
        {
          id: Math.round(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispath) => {
  return () => {
    dispath({ type: "addBlog" });
  };
};

const deleteBlogPost = (dispath) => {
  return (id) => {
    dispath({ type: "deleteBlogPost", payload: id });
  }
}

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost },
  []
);
