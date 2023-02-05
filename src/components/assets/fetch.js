// import { useState } from "react";

// const apiKey = "e1a35da017mshe54f24e83be68a9p1543e2jsn711a0b317ba4";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": apiKey,
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };


// export async function useFetchVidDetails(vidId) {
//   const [chanelId, setviddetails] = useState({});

//   await fetch(
//     `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${vidId}`,
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => setviddetails(response))
//   return chanelId;
// }

// export  function useFetchChDetails(chid) {
//   const [chdetails, setchdetails] = useState({});
// const fetchChDetails = async () =>
//   await fetch(`https://youtube-v31.p.rapidapi.com/search?channelId=${chid}&part=snippet%2Cid&order=date&maxResults=50`, options)
// 	.then(response => response.json())
// 	.then(response => setchdetails(response?.items[0]))
//   return {chdetails, fetchChDetails};
// }
