'use client'

import { Progress } from "antd";
import { useReadingProgressBar } from "../hooks/useReadingProgressBar";

const ReadingProgress = () => {
  const completion = useReadingProgressBar();  
  return (
    <div className="fixed w-full top-[53px]">
        <Progress percent={completion} showInfo={false} strokeColor="#7b87f0" />
    </div>
  )
}

export default ReadingProgress