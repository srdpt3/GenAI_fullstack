"use client"
import React, { useState } from 'react'
import { UploadDropzone } from "@bytescale/upload-widget-react";
import Image from "next/image";

const UploadDnd = () => {
 const [preview, setPreview] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
//   const setImageUrl=useImage((state:any)=>state.setImageUrl)
  return (
    <div>UploadDnd</div>
  )
}

export default UploadDnd

function useImage(arg0: (state: any) => any) {
    throw new Error('Function not implemented.');
}
