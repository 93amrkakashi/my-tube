import { createBrowserRouter } from "react-router-dom";
import Channel from "./components/pages/Channel";
import HomePage from "./components/pages/HomePage";
import Video from "./components/pages/Video";

export const root = "/";
export const channel = "/channel/:id"
export const video = "/video/:id"

export const routes = createBrowserRouter([
  { path: root, element: <HomePage /> },
  { path: channel, element: <Channel /> },
  { path: video, element: <Video /> },
]);
