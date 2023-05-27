// const Test = ({ movieList, columns }) => {
//   const rows = Math.ceil(movieList?.length / columns);

//   const renderMovieCards = () => {
//     return [...Array(rows)].map((_, rowIndex) => {
//       const moviesInRow = movieList?.slice(rowIndex * columns, (rowIndex + 1) * columns)?.map((movieData, index) => {
//         const isSelected = movieData?.Title === showSelectedMovieDetails;

//         return (
//           <MediaCard
//             key={index}
//             image={movieData?.Poster}
//             width="158px"
//             bgColor={theme.colors.secondary}
//             fontColor={theme.colors.gray100}
//             height="278px"
//             imgHeight="190px"
//             imgWidth="157px"
//             title={movieData?.Title}
//             onClickHandler={() => setShowSelectedMovieDetails(movieData?.Title)}
//           />
//         );
//       });

//       return (
//         <React.Fragment key={rowIndex}>
//           {isSelected && (
//             <MediaDetailsCard
//               movieData={moviesInRow.find((movie) => movie.props.title === showSelectedMovieDetails)?.props.movieData}
//               buttonText={['Play Movie', 'Watch Trailer']}
//               imageWidth="334px"
//               imageHeight="389px"
//             />
//           )}
//           <Row length={moviesInRow.length} NO_OF_COLUMNS={columns} CARD_GAP_VALUE={cardGapValueForNotFullFilledRow}>
//             {moviesInRow}
//           </Row>
//         </React.Fragment>
//       );
//     });
//   };

//   return renderMovieCards();
// };
// export default Test;
