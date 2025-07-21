'use client'

import Header from '@/components/Header'
import React from 'react'
import Banner from '@/components/Banner'
import { AboutSection } from '@/components/About'
import { SkillsSection } from '@/components/SkillsSection'

function index() {
  return (
    <>
      <Header />
      <Banner />
      <AboutSection />
      <SkillsSection />
    </>
    
  )
}

export default index