import React from 'react'
import {useRouter} from "next/router";
import MainLayout from '../../../src/components/layouts/mainLayout'


const Index = () => {
  const router = useRouter()
  const {id}= router.query
  return (
    <>
    <MainLayout>
      <h1>SUUNTO - {id} - Page</h1>
    </MainLayout>
    </>
  )
}
export default Index