// import NFT_CARDS from "../dummyData/data";
// import DIV_INFO from "../dummyData/data_for_sd";
// import EXPLORE_DATA from "../dummyData/explore_data";
// import { CHANGE_LIKED, RENDER_POPUP } from "./types";

// const initialState = {
//   nftData: [...NFT_CARDS],
//   exploreData: [...EXPLORE_DATA],
//   divInfo: [...DIV_INFO],
//   isPopUp: false,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CHANGE_LIKED:
//       return {
//         ...state,
//         nftData: state.nftData.map((nft) => {
//           if (nft.id === action.payload.id) {
//             return {
//               ...nft,
//               liked: action.payload.liked,
//               numberOfLikes: action.payload.numberOfLikes,
//             };
//           }
//           return nft;
//         }),
//         exploreData: state.exploreData.map((nft) => {
//           if (nft.id === action.payload.id) {
//             return {
//               ...nft,
//               liked: action.payload.liked,
//               numberOfLikes: action.payload.numberOfLikes,
//             };
//           }
//           return nft;
//         }),
//       };
//     case RENDER_POPUP:
//       return {
//         ...state,
//         isPopUp: action.payload.isPopUp,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
