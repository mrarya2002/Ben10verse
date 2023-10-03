import aliens from '@/data/aliens.json'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ data: aliens.data })
}