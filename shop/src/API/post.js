import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./API";

// request pay

export const fetchPay = createAsyncThunk("order/fetchPay", async (obj) => {
  const { data } = await instance.post("/order/pay", { obj });
  return data;
});

// export const fetchMail = createAsyncThunk("order/fetchMail", async (userMassage) => {
//         const { data } = await instance.post(`/order/mail`, userMassage);
//         return data;
//     }
// );

export const fetchMail = createAsyncThunk("order/fetchMail", async (obj) => {
        const { data } = await instance.post(`/order/generation`, obj);
        return data;
    }
);

export const fetchMailUser = createAsyncThunk("order/fetchMail", async (userMassage) => {
        const { data } = await instance.post(`/order/mailUser`, userMassage);
        return data;
    }
);