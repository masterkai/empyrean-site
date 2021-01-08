import React from 'react'
import Link from 'next/link'
import MainLayout from '../src/components/layouts/mainLayout'

const Index = () => (
  <MainLayout>
    <h1>Index Page</h1>
    <Link href="/brands/suunto">
      <a>SUUNTO</a>
    </Link>
  </MainLayout>
)
export default Index
