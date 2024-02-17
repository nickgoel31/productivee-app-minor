"use client"

import React, { useState } from 'react'

const ColumnSelect = ({prevColumnId}:{prevColumnId:number}) => {

    const [activeColumn, setActiveColumn] = useState<number>(prevColumnId)

    const handleColumns = (columnId: number) => {
        if(activeColumn === columnId) return;
        else {
            setActiveColumn(columnId)
        }
    }

  return (
    <div>ColumnSelect</div>
  )
}

export default ColumnSelect