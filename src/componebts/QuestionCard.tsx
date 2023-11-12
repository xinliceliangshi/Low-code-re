import React, { FC } from 'react'
import './QuestionCard.css'
type PropsType = {
  id: string
  title: string
  isPublished: boolean
}
const QuestionCard: FC<PropsType> = props => {
  const edit = (id: string) => {
    console.log('编辑问卷', id)
  }
  const { id, title, isPublished } = props
  return (
    <div key={id}>
      <span>{title}</span>
      <span>{isPublished ? '已发布' : '未发布'}</span>
      <button
        onClick={() => {
          edit(id)
        }}
      >
        编辑问卷
      </button>
    </div>
  )
}
export default QuestionCard
