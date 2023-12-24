function memoize(defaultValue) {
    let memoizedData = defaultValue;
  
    function getMemoizedData() {
      return memoizedData;
    }
  
    function setMemoizedData(value) {
      memoizedData = value;
    }
  
    return [getMemoizedData, setMemoizedData];
  }
  
  const [getData, setData] = memoize(0);
  
  console.log(getData());
  
  setData(42);
  console.log(getData());