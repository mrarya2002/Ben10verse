import characters from '@/data/maincharacters.json'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ data: characters.data })
}