 function App(startDate, endDate) {
  
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate === "Now" ? "Present" : new Date(endDate).getFullYear();

  return (
    <>
    {startYear} - {endYear}
    </>
  );
};

export default App;
