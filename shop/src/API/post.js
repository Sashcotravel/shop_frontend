import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./API";

// request pay

export const fetchPay = createAsyncThunk("order/fetchPay", async (obj) => {
  const { data } = await instance.post("/order/pay", { obj });
  return data;
});

export const fetchOrder = createAsyncThunk("order/fetchOrder", async (id) => {
  const { data } = await instance.get(`/order/fetchOrder/${id}`);
  return data;
});

export const fetchMail = createAsyncThunk("order/fetchMail", async (obj) => {
        const { data } = await instance.post(`/order/mail`, obj);
        return data;
    }
);

export const fetchMailDima = createAsyncThunk("order/fetchMailDima", async (obj) => {
        const { data } = await instance.post(`/order/mailDima`, obj);
        return data;
    }
);

export const fetchMailDimaZam = createAsyncThunk("order/fetchMailDimaZam", async (obj) => {
        const { data } = await instance.post(`/order/mailDimaZam`, obj);
        return data;
    }
);

export const fetchMailDimaMika = createAsyncThunk("order/fetchMailDimaMika", async (obj) => {
        const { data } = await instance.post(`/order/mailDimaMiyka`, obj);
        return data;
    }
);

export const fetchMailUserMiyka = createAsyncThunk("order/fetchMailUserMiyka", async (obj) => {
        const { data } = await instance.post(`/order/mailUserMiyka`, obj);
        return data;
    }
);

export const fetchMailUser = createAsyncThunk("order/fetchMailUser", async (obj) => {
        const { data } = await instance.post(`/order/mailUser`, obj);
        return data;
    }
);

export const fetchCaptcha = createAsyncThunk("order/fetchCaptcha", async (obj) => {
        const { data } = await instance.post(`/order/reCaptcha`, obj);
        return data;
    }
);