import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "addBlog":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return;
  }
};

const addBlogPost = (dispath) => {
  return () => {
    dispath({ type: "addBlog" });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost },
  []
);
