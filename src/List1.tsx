// import { }
import React, { FC } from 'react'
import QuestionCard from './componebts/QuestionCard'
// import type
const List: FC = () => {
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
          return <QuestionCard key={id} id={id} title={title} isPublished={isPublished} />
        })}
      </div>
    </div>
  )
}
export default List
