import React, { FC, useState } from 'react'
const Demo: FC = () => {
  const [userInfo, setUserInfo] = useState({ name: 'lisi', age: 18 })
  function changeSAge() {
    setUserInfo({
      ...userInfo,
      age: userInfo.age + 1,
    })
  }
  return (
    <div>
      <h2>state 不可变数据</h2>
      <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeSAge}>changeSAge</button>
    </div>
  )
}
export default Demo
