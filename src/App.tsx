import React from 'react'
// import logo from './logo.svg'
import './App.css'

function App() {
  const questionList = [
    { id: 'q1', title: '问卷1', isPublished: true },
    { id: 'q2', title: '问卷2', isPublished: false },
  ]
  return (
    <div>
      <h1>问卷列表页</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return (
            <div key={id}>
              <span>{title}</span>
              <span>{isPublished ? '已发布' : '未发布'}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
