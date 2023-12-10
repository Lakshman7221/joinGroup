import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EmployeServices from "../services/Employe_Services";
import { toast } from "react-toastify";

// create data ------

export const createEmploye = createAsyncThunk(
  "post/createEmploye",
  async (formData, thunkAPI) => {
    try {
      await EmployeServices.createEmploye(formData);
    } catch (error) {const message =(error.response && error.response.data && error.response.data.message) ||
        error.message ||  error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getAllEmployes = createAsyncThunk(
  "get/getAlldata",
  async (_, thunkAPI) => {
    try {
      return await EmployeServices.getAllEmployes();
    } catch (error) {const message =(error.response && error.response.data && error.response.data.message) ||
        error.message ||  error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const updateEmploye = createAsyncThunk(
  "put/update",
  async ({id, formData}, thunkAPI) => {
    try {
      return await EmployeServices.updateEmploye({id, formData});
    } catch (error) {const message =(error.response && error.response.data && error.response.data.message) ||
        error.message ||  error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteEmploye = createAsyncThunk(
  "delete/deleteEmploye",
  async (_id, thunkAPI) => {
    try {
      return await EmployeServices.deleteEmploye(_id);
    } catch (error) {const message =(error.response && error.response.data && error.response.data.message) ||
        error.message ||  error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


// const getLocalProductsData = ()=>{
//   let localStorageData = localStorage.getItem("findUser")
//   if(localStorageData === ""){
//     return [];
//   }else{
//     return JSON.parse(localStorageData)
//   }
// }
const Employe_Slice = createSlice({
  name: "product",
  initialState: {
    allEmployes:[],
    singlePage:[],
    isLoggedIn: false,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:"",
    model:true,
  },
  reducers: {
    showModel:(state, action)=>{
      state.model = action.payload;
    },
    perPage:(state, action)=>{
      state.singlePage = state.allEmployes.slice((action.payload*10)-10, action.payload*10)
    },
  },

  extraReducers: (builder) => {
    builder

      // create Data --------------------

      .addCase(createEmploye.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEmploye.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allEmployes?.push(action.payload);
        toast.success("Created successfully...");
        
      })
      .addCase(createEmploye.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })  

      // getAllEmployes --------------------

      .addCase(getAllEmployes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEmployes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allEmployes = action.payload;
        state.singlePage = action.payload.slice(0,10);
      })
      .addCase(getAllEmployes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })  
      // update employeee --------------------

      .addCase(updateEmploye.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEmploye.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        toast.success("update successfully..");
      })
      .addCase(updateEmploye.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })  
      // delete employeee --------------------

      .addCase(deleteEmploye.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEmploye.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        toast.success("delete successfully..");
      })
      .addCase(deleteEmploye.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.allEmployes = action.payload;
        toast.error(action.payload);
      })  
  },
});

export const {
  showModel,
  perPage,
  
} = Employe_Slice.actions;

export default Employe_Slice.reducer;
