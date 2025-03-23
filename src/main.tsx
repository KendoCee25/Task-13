import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css"; // Optional, if you have global styles

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import store from "./store/store";
// import App from "./App";

// // ✅ Ensure the root element exists
// const rootElement = document.getElementById("root");
// if (!rootElement) {
// //   console.error("❌ Error: Root element not found in index.html!");
// // } else {


// const root = ReactDOM.createRoot(document.getElementById("root")!);
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// )};



// ReactDOM.render(

//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) {
//       throw new Error("Failed to fetch users");
//     }
//     return await response.json();
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error("❌ Error:", error.message);
//     } else {
//       console.error("❌ An unknown error occurred");
//     }
//   }
// });

// const userSlice = createSlice({
//   name: "users",
//   initialState: { users: [], loading: false, error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, /*action */) => {
//         state.loading = false;
//         // state.error = action.payload as string;
//       });
//   },
// });

// export default userSlice.reducer;

// import ReactDOM from "react-dom/client";
// import App from "./App";

// console.log("✅ main.tsx is executing...");

// const rootElement = document.getElementById("root");

// if (!rootElement) {
//   console.error("❌ ERROR: Root element not found in index.html!");
// } else {
//   console.log("✅ Root element found!");
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(<App />);
// }


// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// const rootElement = document.getElementById("root");

// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// } else {
//   console.error("❌ ERROR: Root element not found in index.html!");
// }