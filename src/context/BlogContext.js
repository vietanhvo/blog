import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "editBlogPost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "deleteBlogPost":
      return state.filter((blogPost) => blogPost.id != action.payload);
    case "addBlog":
      return [
        ...state,
        {
          id: Math.round(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispath) => {
  return (title, content, callback) => {
    dispath({ type: "addBlog", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispath) => {
  return (id) => {
    dispath({ type: "deleteBlogPost", payload: id });
  };
};

const editBlogPost = (dispath) => {
  return (id, title, content, callback) => {
    dispath({ type: "editBlogPost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ id: 1, title: "test", content: "adjfkasdjf" }]
);
