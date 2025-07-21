'use client'

import Header from '@/components/Header'
import React from 'react'
import Banner from '@/components/Banner'
import { AboutSection } from '@/components/About'
import { SkillsSection } from '@/components/SkillsSection'
import CareerInfo from '@/components/CareerInfo'

function index() {
  return (
    <>
      <Header />
      <Banner />
      <AboutSection />
      <SkillsSection />
      <CareerInfo />
    </>
    
  )
}

export default index