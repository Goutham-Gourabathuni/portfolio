import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  const filePath = join(process.cwd(), 'pdfs', 'Goutham G - resume updated.pdf')
  const buffer = await readFile(filePath)
  return new NextResponse(buffer as any, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Goutham_Resume.pdf"',
      'Cache-Control': 'no-store'
    }
  })
}


