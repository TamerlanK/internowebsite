import "./App.css";
import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RootLayout } from "./components/index";
import {
  Homepage,
  About,
  NotFound,
  Services,
  ServiceDetails,
  Project,
  Contact,
  Pricing,
  OurTeam,
  TeamDetails,
  ProjectDetails,
  Blog,
  BlogDetails
} from "./pages/index";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="services/:id" element={<ServiceDetails />} />
      <Route path="project" element={<Project />} />
      <Route path="project/:id" element={<ProjectDetails />} />
      <Route path="contact" element={<Contact />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="our-team" element={<OurTeam />} />
      <Route path="our-team/:id" element={<TeamDetails />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:id" element={<BlogDetails/>}/>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
