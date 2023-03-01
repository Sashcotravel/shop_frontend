import { createAsyncThunk } from "@reduxjs/toolkit";
import instance, { instance2 } from "./API";

// request pay

export const fetchPay = createAsyncThunk("order/fetchPay", async (obj) => {
  const { data } = await instance2.post("/order/pay", { obj });
  return data;
});

export const fetchOrder = createAsyncThunk("order/fetchOrder", async (id) => {
  console.log(id);
  const { data } = await instance2.get(`/order/fetchOrder/${id}`);
  return data;
});

export const fetchMail = createAsyncThunk("order/fetchMail", async (obj) => {
        const { data } = await instance2.post(`/order/mail`, obj);
        return data;
    }
);

export const fetchMailDima = createAsyncThunk("order/fetchMailDima", async (obj) => {
        const { data } = await instance2.post(`/order/mailDima`, obj);
        return data;
    }
);

export const fetchMailDimaZam = createAsyncThunk("order/fetchMailDimaZam", async (obj) => {
        const { data } = await instance2.post(`/order/mailDimaZam`, obj);
        return data;
    }
);

export const fetchMailUser = createAsyncThunk("order/fetchMailUser", async (obj) => {
        const { data } = await instance2.post(`/order/mailUser`, obj);
        return data;
    }
);

export const fetchCaptcha = createAsyncThunk("order/fetchCaptcha", async (obj) => {
        // const { data } = await instance.post(`/order/reCaptcha`, obj);
        const { data } = await instance2.post(`/order/reCaptcha`, obj);
        return data;
    }
);