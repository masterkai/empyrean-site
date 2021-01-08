import React from 'react'
import Link from 'next/link'
import MainLayout from '../../../src/components/layouts/mainLayout'

const Index = () => (
  <>
    <MainLayout>
      <h1>SUUNTO Index Page</h1>
      <Link href="/brands/suunto/[id]" as={`/brands/suunto/1`}>
        <a>SUUNTO 1</a>
      </Link>
    </MainLayout>
  </>
)
export default Index
