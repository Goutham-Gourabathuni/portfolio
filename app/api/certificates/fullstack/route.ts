import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  const filePath = join(process.cwd(), 'pdfs', 'Full-stack-web-development-certificate.pdf')
  const buffer = await readFile(filePath)
  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Cache-Control': 'no-store'
    }
  })
}


