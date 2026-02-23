import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const fileMap: Record<string, string> = {
    fullstack: 'Full-stack-web-development-certificate.pdf',
    'oracle-genai': 'Oracle-GenAI-professional-eCertificate.pdf',
    'oracle-ai': 'Oracle-AI-foundations-associate-eCertificate.pdf',
    'aml-coursera': 'AML-coursera-certificate.pdf',
    '10th-memo': '10th-memo-Goutham.pdf',
    '12th-memo': '12th-memo-Goutham.pdf',
    'yugayatra': 'Yuga-Yatra-Certificate.pdf'
  }

  const fileName = fileMap[params.name]

  if (!fileName) {
    return new NextResponse('File not found', { status: 404 })
  }

  const filePath = join(process.cwd(), 'pdfs', fileName)
  const buffer = await readFile(filePath)

  return new Response(buffer as any, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${fileName}"`,
      'Cache-Control': 'no-store'
    }
  })
}

// export async function GET() {
//   const filePath = join(process.cwd(), 'pdfs', 'Full-stack-web-development-certificate.pdf')
//   const buffer = await readFile(filePath)
//   return new NextResponse(buffer, {
//     headers: {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'inline; filename="Full-stack-web-development-certificate.pdf"',
//       'Cache-Control': 'no-store'
//     }
//   })
// }

// export async function GET() {
//   const filePath = join(
//     process.cwd(),
//     'pdfs',
//     'Oracle-GenAI-professional.pdf'
//   )

//   const buffer = await readFile(filePath)

//   return new NextResponse(buffer, {
//     headers: {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'inline; filename="Oracle-GenAI-professional.pdf"',
//       'Cache-Control': 'no-store'
//     }
//   })
// }

