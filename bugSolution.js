```javascript
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate fetching data on the client
    const fetchData = async () => {
      //  Replace this with your actual data fetching logic
      const data = await fetch('/api/data'); 
      const json = await data.json();
      setCount(json.count);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>Count: {count}</p>
    </div>
  );
}
```