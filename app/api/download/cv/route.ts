import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  const filePath = join(process.cwd(), 'pdfs', 'Goutham-CV.pdf')
  const buffer = await readFile(filePath)
  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Goutham-CV.pdf"',
      'Cache-Control': 'no-store'
    }
  })
}


