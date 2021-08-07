import React,{ useState }  from 'react'
import { Button } from 'reactstrap';

export default function Count() {
  const [count, setCount] = useState(0);
  return (
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
  )
}
