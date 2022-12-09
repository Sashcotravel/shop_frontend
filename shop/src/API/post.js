import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./API";

// request pay

export const fetchPay = createAsyncThunk("order/fetchPay", async (obj) => {
  const { data } = await instance.post("/order/pay", { obj });
  return data;
});

export const fetchMail = createAsyncThunk("order/fetchMail", async (massage) => {
        const { data } = await instance.post(`/order/mail`, massage);
        return data;
    }
);

export const fetchPopulatePosts = createAsyncThunk("posts/fetchPopulatePosts", async () => {
        const { data } = await instance.get("/posts/all/populate");
        return data;
    }
);

export const fetchLikePosts = createAsyncThunk("posts/fetchLikePosts", async ({ id, act, like }) => {
        const { data } = await instance.post(`/posts/like/${id}`, {act: act, like: like,});
        return data;
    }
);

export const fetchDeletePost = createAsyncThunk("posts/fetchDeletePost", async (id) => {
        const { data } = instance.delete(`/posts/${id}`);
        return data;
    }
);


// request comment


export const fetchAllComments = createAsyncThunk("posts/fetchAllComments", async () => {
    const { data } = await instance.get("/posts/comments/all");
    return data;
  }
);

export const fetchDeleteComments = createAsyncThunk("posts/fetchDeleteComments", async (id) => {
        const { data } = instance.delete(`/posts/comment/${id}`);
        return data;
    }
);

export const fetchEditeComments = createAsyncThunk("posts/fetchEditeComments", async (editBody) => {
        const { data } = instance.patch(`/posts/comment/${editBody.id}`, {text: editBody.text,});
        return data;
    }
);

// request tags

export const fetchTags = createAsyncThunk("posts/fetchTags", async () => {
  const { data } = await instance.get("/posts/posts/tags");
  return data;
});

export const fetchOneTags = createAsyncThunk("posts/fetchOneTags", async (tags) => {
    const { data } = await instance.get(`/posts/posts/tags/${tags}`);
    return data;
  }
);
